import { useState } from "react";

export default function Test() {
  const wordbank = [
    "the",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "lazy",
    "dog",
  ];
  const [activeWords, setActiveWords] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-2">
      <div className={"flex flex-row gap-2"}>
        <p className="p-2 bg-white rounded text-black">Sentence:</p>

        {activeWords.map((word) => (
          <p
            className="p-2 bg-white rounded text-black"
            style={{ viewTransitionName: word }}
			key={word}
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
              className="p-2 bg-white rounded text-black"
              style={{ viewTransitionName: word }}
			  onClick={() => {
				document.startViewTransition(() => {
					setActiveWords((prev) => [...prev, word]);
				})
			  }}
			  key={word}
            >
              {word}
            </p>
          ))}
      </div>
    </div>
  );
}
