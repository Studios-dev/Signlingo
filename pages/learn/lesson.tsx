import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { cn } from "@/utils/cn";

export default function Lesson() {
	const numquestions = 10;
	const [question, setQuestion] = useState(1);

  return (
    <>
      <Head>
        <title>Signlingo | Lesson</title>
      </Head>
      <Link href="/learn" className="ml-8 mt-20 absolute">
        <ArrowLeftIcon className="size-4" />
      </Link>
      <div className="grow flex flex-col items-center mb-10 mt-5">
				<h2 className="font-medium text-lg mb-2 tracking-wide text-gray-300">Lesson Name Here</h2>
				<div className="rounded-full w-96 h-3.5 bg-white/10 relative overflow-hidden">
					<div className="inset-y-0 left-0 bg-cyan-600 absolute rounded-full transition-all duration-300" style={{ right: `${(1 - (question/numquestions)) * 100}%` }}/>
					
				</div>
				<button
            className={cn(
              "rounded-xl bg-cyan-800 font-medium text-lg w-72 h-12 border-b-4 border-cyan-900 mt-auto",
              "motion-preset-slide-up motion-duration-1000",
              "transition-all hover:focus:border-b-0 hover:focus:scale-y-92"
            )}
            onClick={() => setQuestion(q => ++q)}
          >
            {question === numquestions ? "Finish Lessson 🎉" : "Next"}
          </button>
			</div>
    </>
  );
}
