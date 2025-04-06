import { cn } from "@/utils/cn";
import {
	FillInTheBlankQuestion,
	VideoMultipleChoiceQuestion,
} from "@/utils/lesson";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";

export default function VideoMultipleChoice({
	question,
}: {
	question: VideoMultipleChoiceQuestion;
}) {
	const [selected, setSelected] = useState<string>();
	const [speed, setSpeed] = useState(1);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		setSelected(undefined);
		setSpeed(1);
	}, [question]);

	const component =
		question.type != "videomultiplechoice" ? (
			<></>
		) : (
			<>
				<div
					id="mypopover"
					popover="auto"
					className="backdrop:bg-black/20 backdrop:backdrop-blur-sm open:flex motion-preset-blur-up-lg flex-col m-auto p-4 rounded-2xl text-white bg-[#142F35] border-2 border-[#2c444a] relative isolate overflow-visible"
				>
					<h2 className="text-lg font-bold">New Word:</h2>
					<p className="mt-2 flex">
						<span>
							<span className="underline decoration-dotted">
								{question.answer}
							</span>
							{" - "}
						</span>
						<span className="max-w-md text-gray-200">
							{question.definition}
						</span>
					</p>
					<button
						popoverTarget="mypopover"
						className="absolute -top-3 -right-3 rounded-xl shadow-sm p-1 bg-[#2c444a] border-2 border-[#506569]"
					>
						<XMarkIcon className="size-5" />
					</button>
				</div>
				<p className="text-gray-50 mt-10 max-w-lg text-center">
					{question.prompt}
				</p>
				<p className="text-gray-200 mt-2 max-w-lg text-center text-sm">
					{question.hint}
				</p>

				<video
					controls={false}
					loop={true}
					src={question.videoUrl}
					autoPlay={true}
					muted
					className="mt-6 h-56 rounded-xl"
					ref={videoRef}
				/>
				<div className="flex gap-2 mb-6 py-2 px-4 border-b-2 border-x-2  border-[#2c444a] rounded-b-xl bg-[#142F35] z-10">
					<button
						className={cn(
							"py-0.5 px-3 border-2 border-white/20 rounded-xl shadow-sm bg-white/10 backdrop-blur-md",
							speed != 1 && "bg-white text-cyan-950"
						)}
						onClick={() => {
							setSpeed(0);
							if (videoRef.current) {
								console.log(
									"found",
									videoRef.current.playbackRate
								);
								videoRef.current.playbackRate = 0.25;
								console.log(
									"found",
									videoRef.current.playbackRate
								);
							}
						}}
					>
						0.25x
					</button>
					<button
						className={cn(
							"py-0.5 px-3 border-2 border-white/20 rounded-xl shadow-sm bg-white/10 backdrop-blur-md",
							speed == 1 && "bg-white text-cyan-950"
						)}
						onClick={() => {
							setSpeed(1);
							if (videoRef.current) {
								videoRef.current.playbackRate = 1;
							}
						}}
					>
						1x
					</button>
					<button
						className={cn(
							"py-0.5 px-3 border-2 border-white/20 rounded-xl shadow-sm bg-white/10 backdrop-blur-md"
						)}
						onClick={() => {}}
						popoverTarget="mypopover"
					>
						?
					</button>
				</div>

				<div className="flex gap-4">
					{question.extraWords.map((v, i) => (
						<button
							key={v + "videomultiple"}
							//@ts-expect-error
							style={{ "--i": `${i * 75}ms` }}
							className={cn(
								"py-2 px-4 border-2 border-white/20 rounded-xl shadow-sm bg-white/10 backdrop-blur-md transition text-shadow-lg motion-preset-blur-right motion-delay-[var(--i)]",
								selected === v && "bg-white text-cyan-950"
							)}
							onClick={() => setSelected(v)}
						>
							{v}
						</button>
					))}
				</div>
			</>
		);

	const validate = () => {
		if (question.type != "videomultiplechoice") return true;
		return selected === question.answer;
	};

	return { component, validate };
}
