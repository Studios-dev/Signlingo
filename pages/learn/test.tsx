import { useState, unstable_ViewTransition as ViewTransition } from "react";

export default function Test() {
  const [leftright, setLeftright] = useState(false);
  const wordbank = [
    "testing2"
  ];
  const [activeWords, setActiveWords] = useState<string[]>([]);

  return (
    <ViewTransition>
      <div className={"w-96 h-96 relative border-[black_1px]"}>
		<div className={`bg-red-900 absolute ${leftright && "right-0 bottom-0"}`} style={{ viewTransitionName: "testing" }}>test</div>
	  </div>
      <button
        onClick={() => {
          document.startViewTransition(() => {
            setLeftright(!leftright);
          });
        }}
      >
        Do it
      </button>

	  <div className="flex flex-col gap-2">
      <div className={"flex flex-row gap-2"}>
        <p className="p-2 bg-white rounded text-black">Sentence:</p>

        {activeWords.map((word) => (
          <p
            className="p-2 bg-white rounded text-black cursor-pointer"
            style={{ viewTransitionName: word }}
            key={word}
            onClick={() => {
              //document.startViewTransition(() => {
                setActiveWords((prev) => prev.filter((w) => w !== word));
              //});
            }}
          >
            {word}
          </p>
        ))}
      </div>
      <hr />
      <div className={"flex flex-row gap-2"}>
        <p className="p-2 bg-white rounded text-black">Bank:</p>
        {wordbank
          .filter((word) => !activeWords.includes(word))
          .map((word) => (
            <p
              className="p-2 bg-white rounded text-black cursor-pointer"
              style={{ viewTransitionName: word }}
              onClick={() => {
                //document.startViewTransition(() => {
                	setActiveWords((prev) => [...prev, word]);
                //});
              }}
              key={word}
            >
              {word}
            </p>
          ))}
      </div>
    </div>
    </ViewTransition>
  );
}
