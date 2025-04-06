import { RearrangeQuestion } from "@/utils/lesson";
import { useEffect, useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableWordItem {
  id: UniqueIdentifier;
  text: string;
}

interface SortableItemProps {
  id: UniqueIdentifier;
  text: string;
  isDragging?: boolean;
}

export function SortableItem({ id, text, isDragging = false }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: itemIsActuallyDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: itemIsActuallyDragging ? 0.5 : 1,
  };

  const itemClasses = `
    py-2 px-4 m-1 border-2 border-white/20 rounded-xl shadow-sm bg-white/10 backdrop-blur-md
    touch-none
    ${isDragging ? 'cursor-grabbing ring-2 ring-cyan-500' : 'cursor-grab'}
    ${itemIsActuallyDragging ? 'opacity-50' : ''}
  `;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={itemClasses}
      aria-label={`Draggable word: ${text}`}
    >
      {text}
    </div>
  );
}

export default function Rearrange(
  { question }: { question: RearrangeQuestion },
) {
	
const initialWords: () => SortableWordItem[] = () => (question.type != "rearrange" ? [] : question.words.map((text) => {
	return { id: text, text }
}));

// atp I think this is some of the worst code I've ever written -Lukas
useEffect(() => {
	if (question.words) {
		setItems(initialWords())
	}
}, [question.words])

  const [items, setItems] = useState<SortableWordItem[]>(initialWords());
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (over && active.id !== over.id) {
      setItems((currentItems) => {
        const oldIndex = currentItems.findIndex((item) => item.id === active.id);
        const newIndex = currentItems.findIndex((item) => item.id === over.id);

        if (oldIndex === -1 || newIndex === -1) {
            return currentItems;
        }

        return arrayMove(currentItems, oldIndex, newIndex);
      });
    }
  };

  const handleDragCancel = () => {
      setActiveId(null);
  }

  const activeItem = activeId ? items.find(item => item.id === activeId) : null;

  const component = question.type != "rearrange" ? <></> : (
    <>
		<p className="text-gray-50 mt-10 max-w-lg text-center">Rearrange the sentance to be the be a valid ASL sentance. The english translation of the end result is provided</p>
		<h3 className="mt-10 mb-5 font-medium text-xl">
			{question.prompt} 
		</h3>
		
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext
        items={items.map(item => item.id)}
        strategy={horizontalListSortingStrategy}
      >
        <div className="flex flex-wrap p-4">
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} text={item.text} />
          ))}
        </div>
      </SortableContext>

      <DragOverlay>
        {activeId && activeItem ? (
          <SortableItem id={activeId} text={activeItem.text} isDragging />
        ) : null}
      </DragOverlay>
    </DndContext>
    </>
  );

	const validate = () => {
		return question.answer.every((q, i) => items[i].text === q)
	}

  return { component, validate };
}
