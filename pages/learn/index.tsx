import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import Stage from "@/components/stage";
import { getUsersData, FirestoreContext } from "@/utils/firestore";
import Link from "next/link";
import Head from "next/head";

export default function Learn() {
	const user = useContext(FirestoreContext);
	const router = useRouter();
	const [stage, setStage] = useState(-1);

	useEffect(() => {
		(async () => {
			if (user != undefined) {
				const data = await getUsersData(user);
				setStage(data.stage);
			}
		})();
	}, [user]);

	useEffect(() => {
		if (!user) {
			router.push("/");
		}
	}, [user, router]);

	return (
		<>
			<Head>
				<title>Signlingo | Learn</title>
			</Head>
			<div className="flex flex-col grow py-20 items-center">
				<div className="flex w-96 items-center pb-10 motion-preset-blur-up">
					<div className="rounded-full h-0.75 bg-[#2E4C53] grow"></div>
					<p className="px-4 text-[#3B6A75] text-base/0 font-semibold">
						Ordering at a Restaurant
					</p>
					<div className="rounded-full h-0.75 bg-[#2E4C53] grow"></div>
				</div>
				<div className="flex flex-col gap-8">
					<Link href="/learn/lesson">
						<Stage
							className="motion-delay-100 motion-preset-blur-up"
							stage={
								stage === 0
									? 1
									: stage === 1
									? 2
									: stage >= 2
									? 3
									: 0
							}
						/>
					</Link>
					<Link href="/learn/lesson">
						<Stage
							stage={
								stage === 2
									? 1
									: stage === 3
									? 2
									: stage >= 4
									? 3
									: 0
							}
							className="!-translate-x-18 motion-delay-200 motion-preset-blur-up"
						/>
					</Link>
					<Link href="/learn/lesson">
						<Stage
							className="!-translate-x-36 motion-delay-300 motion-preset-blur-up"
							stage={
								stage === 4
									? 1
									: stage === 5
									? 2
									: stage >= 6
									? 3
									: 0
							}
						/>
					</Link>
					<Link href="/learn/lesson">
						<Stage
							className="!-translate-x-18 motion-delay-400 motion-preset-blur-up"
							stage={
								stage === 6
									? 1
									: stage === 7
									? 2
									: stage >= 8
									? 3
									: 0
							}
						/>
					</Link>
					<Link href="/learn/lesson">
						<Stage
							className="motion-delay-500 motion-preset-blur-up"
							stage={
								stage === 8
									? 1
									: stage === 9
									? 2
									: stage >= 10
									? 3
									: 0
							}
						/>
					</Link>
				</div>
				<div className="flex w-96 items-center pt-20 pb-10">
					<div className="rounded-full h-0.75 bg-[#2E4C53] grow"></div>
					<p className="px-4 text-[#3B6A75] text-base/0 font-semibold">
						In the Docters Office
					</p>
					<div className="rounded-full h-0.75 bg-[#2E4C53] grow"></div>
				</div>
				<div className="flex flex-col gap-8 mask-b-from-0% mask-b-to-70% w-80 translate-x-24 relative">
					<Stage />
					<Stage className="translate-x-18" />
					<Stage className="translate-x-36" />
					<Stage className="translate-x-18" />
					<Stage />
				</div>
			</div>
		</>
	);
}
