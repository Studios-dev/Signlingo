import { FillInTheBlankQuestion } from "@/utils/lesson";
import { useEffect, useState } from "react";

export default function FillIn({
	question,
}: {
	question: FillInTheBlankQuestion;
}) {
	const [selected, setSelected] = useState<string>();

	useEffect(() => {
		setSelected(undefined);
	}, [question]);

	const component =
		question.type != "fillintheblank" ? (
			<></>
		) : (
			<>
				<p className="text-gray-50 mt-10 max-w-lg text-center">
					Fill in the blank with the word that fits the best
				</p>
				<div className="mt-10 mb-5 font-medium text-xl flex">
					{question.prompt.split("%blank%")[0]}
					<div className="underline decoration-dotted mx-3 relative mt-4">
						{"       "}
						{selected && (
							<div className="absolute bottom-2 py-2 px-4 w-min mx-auto inset-x-0 border-2 border-white/20 rounded-xl shadow-sm bg-white/10 backdrop-blur-md">
								{selected}
							</div>
						)}
					</div>
					{question.prompt.split("%blank%")[1]}
				</div>
				<div className="flex gap-4">
					{question.extraWords
						.filter((v) => v != selected)
						.map((v) => (
							<button
								//@ts-expect-error
								style={{ "--i": `${i * 75}ms` }}
								className="py-2 px-4 border-2 border-white/20 rounded-xl shadow-sm bg-white/10 backdrop-blur-md motion-preset-blur-right motion-delay-[var(--i)]"
								onClick={() => setSelected(v)}
							>
								{v}
							</button>
						))}
				</div>
			</>
		);

	const validate = () => {
		if (question.type != "fillintheblank") return true;
		return selected === question.answer;
	};

	return { component, validate };
}
