import { getAuth, signInWithPopup } from "firebase/auth";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";
import Link from "next/link";
import { provider } from "@/firebase";
import Stage from "@/components/stage";
import { useContext } from "react";
import { FirestoreContext } from "@/utils/firestore";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/20/solid";

export default function Home() {
	const user = useContext(FirestoreContext);
	const router = useRouter();

	const signIn = async () => {
		try {
			const res = await signInWithPopup(getAuth(), provider);

			if (res.user) {
				router.push("/learn");
			}
		} catch (e) {
			console.log("smth bad happened", e);
		}
	};

	return (
		<>
			<div className="flex h-[70dvh] flex-col items-center justify-center">
				<div className="flex justify-center gap-8 scale-75 mb-12 ">
					<Stage
						stage={3}
						className="motion-delay-1500 motion-preset-blur-right"
					/>
					<button className="" disabled>
						<Stage
							stage={2}
							className="!-translate-y-10 motion-delay-1750 motion-preset-blur-right"
						/>
					</button>
					<Stage className="motion-delay-2000 motion-preset-blur-right" />
				</div>
				<div className="flex flex-col items-center motion-preset-slide-up motion-duration-1500 gap-6 -mt-5">
					<h1 className="text-5xl/14 font-semibold max-w-lg text-center bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
						Master ASL The Engaging Way
					</h1>
					<p className="text-white/80 font-medium max-w-md text-center">
						Learn American Sign Language by breaking up the task
						into short, gamified, daily exersizes.
					</p>
				</div>
				<div className="flex gap-6">
					{user ? (
						<Link
							href="/learn"
							className={cn(
								"mt-8 rounded-xl bg-cyan-800 font-medium text-lg w-72 h-12 border-b-4 border-cyan-900 grid place-items-center",
								"motion-delay-650 motion-preset-slide-up motion-duration-1000",
								"transition-all hover:focus:border-b-0 hover:focus:translate-y-2 hover:focus:scale-y-92"
							)}
						>
							Dashboard
						</Link>
					) : (
						<button
							className={cn(
								"mt-8 rounded-xl bg-cyan-800 font-medium text-lg w-72 h-12 border-b-4 border-cyan-900",
								"motion-delay-650 motion-preset-slide-up motion-duration-1000",
								"transition-all hover:focus:border-b-0 hover:focus:translate-y-2 hover:focus:scale-y-92"
							)}
							onClick={() => signIn()}
						>
							Get Started
						</button>
					)}
					<button
						className={cn(
							"mt-8 rounded-xl bg-cyan-950 font-medium text-lg w-72 h-12 border-b-4 border-[#052c3b] text-shadow",
							"motion-delay-650 motion-preset-slide-up motion-duration-1000",
							"transition-all hover:focus:border-b-0 hover:focus:translate-y-2 hover:focus:scale-y-92"
						)}
						onClick={() =>
							window.scrollTo({
								behavior: "smooth",
								top: window.innerHeight,
							})
						}
					>
						Learn More
					</button>
				</div>
			</div>
			<div className="mt-46 flex flex-col items-center">
				<h3 className="text-4xl/14 font-semibold max-w-lg text-center bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
					Learn More
				</h3>
				<p className="flex rounded-xl p-6 text-center max-w-2xl text-gray-100 font-normal text-balance">
					Signlingo transforms learning ASL from a chore into a fun
					and engaging game. It offers a free platform where you can
					create an account and start exploring American Sign
					Language. With easy-to-follow exercises, you'll build a
					natural and intuitive understanding of ASL. Whether you're
					just starting out or brushing up, Signlingo makes the
					journey enjoyable!
				</p>
			</div>
			<div className="mt-20 flex flex-col items-center">
				<h3 className="text-4xl/14 font-semibold max-w-lg text-center bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
					Plans
				</h3>
				<div className="flex mt-8 mb-30 gap-8">
					<fieldset className="flex rounded-xl p-6 border-2 border-white/20 w-80">
						<legend className="border-white/20 bg-white/10 border-2 font-semibold rounded-xl px-4 py-2 text-lg mx-auto">
							Signlingo Free
						</legend>
						<div className="flex flex-col gap-2">
							<div className="flex text-center">
								<CheckCircleIcon className="size-5 mr-2" />
								<p className="text-sm">Free Forever</p>
							</div>
							<div className="flex text-center">
								<CheckCircleIcon className="size-5 mr-2" />
								<p className="text-sm">
									Access to Basic Lessons
								</p>
							</div>
							<div className="flex text-center">
								<XCircleIcon className="size-5 mr-2 text-gray-400" />
								<p className="text-sm text-gray-300">
									Boosted Gems
								</p>
							</div>
							<div className="flex text-center">
								<XCircleIcon className="size-5 mr-2 text-gray-400" />
								<p className="text-sm text-gray-300">
									AI Tutor
								</p>
							</div>
							<div className="flex text-center">
								<XCircleIcon className="size-5 mr-2 text-gray-400" />
								<p className="text-sm text-gray-300">
									Compete with Friends
								</p>
							</div>
						</div>
					</fieldset>
					<fieldset className="flex rounded-xl p-6 border-2 border-white/20 w-80">
						<legend className="border-white/20 bg-white/10 border-2 font-semibold rounded-xl px-4 py-2 text-lg mx-auto">
							Signlingo{" "}
							<span className="bg-clip-text font-black text-transparent bg-linear-to-br from-blue-500 to-rose-500">
								PRO MAX
							</span>
						</legend>
						<div className="flex flex-col gap-2">
							<div className="flex text-center">
								<CheckCircleIcon className="size-5 mr-2 text-pink-400" />
								<p className="text-sm">All Free Features</p>
							</div>

							<div className="flex text-center">
								<CheckCircleIcon className="size-5 mr-2 text-pink-400" />
								<p className="text-sm">
									Enhanced Lesson Library
								</p>
							</div>
							<div className="flex text-center">
								<CheckCircleIcon className="size-5 mr-2 text-pink-400" />
								<p className="text-sm">Boosted Gems</p>
							</div>
							<div className="flex text-center">
								<CheckCircleIcon className="size-5 mr-2 text-pink-400" />
								<p className="text-sm">AI Tutor</p>
							</div>
							<div className="flex text-center">
								<CheckCircleIcon className="size-5 mr-2 text-pink-400" />
								<p className="text-sm">Compete with Friends</p>
							</div>
							<div className="flex">
								<CheckCircleIcon className="size-5 mr-2 text-pink-400" />
								<p className="text-sm">
									All this incredible value for just{" "}
									<span className="font-bold">
										$4.95<sub>/mo</sub>
									</span>
								</p>
							</div>
							<div className="flex">
								<CheckCircleIcon className="size-5 mr-2 text-pink-400 min-w-5" />
								<p className="text-sm">
									But if you call
									<span className="font-bold">
										{" "}
										right now{" "}
									</span>
									we'll double it absolutely free!
								</p>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</>
	);
}
