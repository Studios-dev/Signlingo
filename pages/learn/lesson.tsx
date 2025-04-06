import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function Lesson() {
	const numlessons = 5;
	const [question, setQuestion] = useState(1);

  return (
    <>
      <Head>
        <title>Signlingo | Lesson</title>
      </Head>
      <Link href="/learn" className="ml-8 mt-6">
        <ArrowLeftIcon className="size-6" />
      </Link>
      <div className="grow flex flex-col items-center">
				<div className="rounded-full w-96 h-3.5 bg-red-50 relative overflow-hidden">
					<div className="inset-y-0 left-0 bg-red-500 absolute" style={{ right: `${(1 - (question/numlessons)) * 100}%` }}/>
					
				</div>
			</div>
    </>
  );
}
