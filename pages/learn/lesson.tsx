import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Head from "next/head";
import { JSX, useContext, useEffect, useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { FirestoreContext, getUsersData, setUserData } from "@/utils/firestore";
import { getLesson } from "@/utils/lessons";
import {
	FillInTheBlankQuestion,
	RearrangeQuestion,
	VideoMultipleChoiceQuestion,
} from "@/utils/lesson";

import Rearrange from "@/components/lessons/rearrange";
import FillIn from "@/components/lessons/fillin";
import VideoMultipleChoice from "@/components/lessons/videomultiple";

export default function Lesson() {
	const user = useContext(FirestoreContext);
	const [stage, setStage] = useState(-1);
	const lesson = getLesson(stage);

	useEffect(() => {
		(async () => {
			if (user != undefined) {
				const data = await getUsersData(user);
				setStage(data.stage);
			}
		})();
	}, [user]);

	const [question, setQuestion] = useState(1);

	const questionJSON = lesson.questions[question - 1];
	const questionType = questionJSON.type;

	// This is a really shitty way to do this
	// But it's small and *theoretically works without errors*
	// So fuck it we ball - Bloxs
	const questionComponent = (
		{
			rearrange: Rearrange({
				question: questionJSON as RearrangeQuestion,
			}),
			fillintheblank: FillIn({
				question: questionJSON as FillInTheBlankQuestion,
			}),
			record: FillIn({
				question: questionJSON as FillInTheBlankQuestion,
			}),
			videomultiplechoice: VideoMultipleChoice({
				question: questionJSON as VideoMultipleChoiceQuestion,
			}),
			videowordbank: FillIn({
				question: questionJSON as FillInTheBlankQuestion,
			}),
			wordbank: FillIn({
				question: questionJSON as FillInTheBlankQuestion,
			}),
		} satisfies Record<
			typeof questionType,
			{ component: JSX.Element; validate: () => boolean }
		>
	)[questionType];

	return (
		<>
			<Head>
				<title>Signlingo | Lesson</title>
			</Head>
			<Link href="/learn" className="ml-8 mt-20 absolute">
				<ArrowLeftIcon className="size-4" />
			</Link>
			<div className="grow flex flex-col items-center mb-10 mt-5">
				<h2 className="font-medium text-lg mb-2 tracking-wide text-gray-300">
					{lesson.name}
				</h2>
				<div className="rounded-full w-96 h-3.5 bg-white/10 relative overflow-hidden">
					<div
						className="inset-y-0 left-0 bg-cyan-600 absolute rounded-full transition-all duration-300"
						style={{
							right: `${
								(1 - question / (lesson.questions.length + 1)) *
								100
							}%`,
						}}
					/>
				</div>
				{questionComponent.component}
				<button
					className={cn(
						"rounded-xl bg-cyan-800 font-medium text-lg w-72 h-12 border-b-4 border-cyan-900 mt-auto",
						"motion-preset-slide-up motion-duration-1000",
						"transition-all hover:focus:border-b-0 hover:focus:scale-y-92"
					)}
					onClick={() => {
						if (questionComponent.validate()) {
							if (question === lesson.questions.length) {
								setQuestion(1);
								setStage(stage + 1);
								setUserData("stage", stage + 1, user);
								// insert rewards here
							} else {
								setQuestion((q) => ++q);
							}
						} else {
							alert("Please fill in the question correctly.");
						}
					}}
				>
					{question === lesson.questions.length
						? "Finish Lessson 🎉"
						: "Next"}
				</button>
			</div>
		</>
	);
}
