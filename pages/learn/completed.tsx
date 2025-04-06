import { cn } from "@/utils/cn";
import Head from "next/head";
import Link from "next/link";
import ReactConfetti from "react-confetti";
import Countup from "react-countup";

export default function Completed() {
	return (
		<>
			<Head>
				<title>Signlingo | Lesson</title>
			</Head>
			<div className="grow flex flex-col items-center mb-10 mt-5">
				<h2 className="font-medium text-lg mb-2 tracking-wide text-gray-300">
					Lesson Complete!
				</h2>
				<div className="rounded-full w-96 h-3.5 bg-linear-90 from-cyan-600 to-cyan-700"></div>
				<div className="pointer-events-none">
					<ReactConfetti className="size-full" />
				</div>
				<div className="flex flex-col gap-8 mt-16 w-96 z-10">
					<div className="flex border-2 border-white/20 bg-white/10 p-6 rounded-xl justify-between items-center motion-preset-blur-up-lg motion-duration-700">
						<img src="/gem.svg" className="size-18 motion-preset-blur-right motion-delay-300" />
						<div className="font-bold text-3xl flex motion-preset-blur-right motion-delay-500">
							+
							<div className="w-10 ml-px">
								<Countup end={10} delay={0.6} />
							</div>
						</div>
					</div>

					<div className="flex border-2 border-white/20 bg-white/10 p-6 rounded-xl justify-between items-center motion-preset-blur-up-lg motion-duration-700 motion-delay-1500">
						<p className="text-7xl font-extrabold text-transparent bg-radial-[at_50%_0%] from-teal-400 to-teal-700 bg-clip-text motion-preset-blur-right motion-delay-1800">XP</p>
						<div className="font-bold text-3xl flex motion-preset-blur-right motion-delay-2000">
							+
							<div className="w-10 ml-px">
								<Countup end={25} delay={2.1} />
							</div>
						</div>
					</div>
				</div>
				<Link
					className={cn(
						"rounded-xl bg-cyan-800 font-medium text-lg w-72 h-12 border-b-4 border-cyan-900 mt-auto grid place-items-center",
						" motion-duration-1000",
						"transition-all hover:focus:border-b-0 hover:focus:scale-y-92"
					)}
					href="/learn"
				>
					Home
				</Link>
			</div>
		</>
	);
}
