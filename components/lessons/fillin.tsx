import { FillInTheBlankQuestion, RearrangeQuestion } from "@/utils/lesson";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./rearrange";

export default function FillIn({ question }: { question: FillInTheBlankQuestion }) {
	const component = question.type != "fillintheblank" ? <></> : (
    <>
		stuff
    </>
  );

  return { component, validate: () => true };
}