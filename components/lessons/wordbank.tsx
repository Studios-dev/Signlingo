import { cn } from "@/utils/cn";
import { FillInTheBlankQuestion, WordBankQuestion } from "@/utils/lesson";
import { useEffect, useState } from "react";

export default function WordBank({ question }: { question: WordBankQuestion }) {
	const [selected, setSelected] = useState<string[]>([]);

	useEffect(() => {
		setSelected([]);
	}, [question]);

	const component =
		question.type != "wordbank" ? (
			<></>
		) : (
			<>
				<p className="text-gray-50 mt-10 max-w-lg text-center">
					Based on the prompt, use the word bank to write the sentance
					in ASL
				</p>
				<h3 className="mt-10 mb-5 font-medium text-xl">
					{question.prompt}
				</h3>
				<p className="text-gray-200 mt-2 max-w-lg text-center text-sm">
					{question.hint}
				</p>
				<div className="my-10 font-medium flex flex-col">
					<div className="flex gap-2 h-10">
						{selected.map((v) => (
							<button
								className=" py-2 px-4 border-2 border-white/20 rounded-xl shadow-sm bg-white/10 backdrop-blur-md"
								onClick={() =>
									setSelected((selectedList) =>
										selectedList.filter(
											(selected) => selected !== v
										)
									)
								}
							>
								{v}
							</button>
						))}
					</div>
					<div className="underline decoration-dotted leading-0">
						{"                            "}
					</div>
				</div>
				<div className="flex gap-4 transition-all">
					{question.extraWordBank
						.filter((v) => !selected.some((w) => w == v))
						.map((v, i) => (
							<button
								key={v + "fillin" + question.answer}
								//@ts-expect-error
								style={{ "--i": `${(1 + i) * 75}ms` }}
								className={cn(
									"py-2 px-4 border-2 border-white/20 rounded-xl shadow-sm bg-white/10 backdrop-blur-md motion-preset-blur-right motion-delay-[var(--i)] transition-all duration-300"
									// v == selected && "w-0 overflow-clip px-0 transform-gpu opacity-0 mo"
								)}
								onClick={() => setSelected((s) => s.concat(v))}
							>
								{v}
							</button>
						))}
				</div>
			</>
		);

	const validate = () => {
		return question.answer.every((v, i) => selected[i] === v);
	};

	return { component, validate };
}
