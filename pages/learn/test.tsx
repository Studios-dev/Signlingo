import { useState } from "react";

export default function Test() {
	const [leftright, setLeftright] = useState(false);
	const wordbank = ["testing2"];
	const [activeWords, setActiveWords] = useState<string[]>([]);

	return (
		<>
			<div className={"w-96 h-96 relative border-[black_1px]"}>
				<div
					className={`bg-red-900 absolute ${leftright && "right-0 bottom-0"}`}
					style={{ viewTransitionName: "testing" }}
				>
					test
				</div>
			</div>
			<button
				onClick={() => {
					document.startViewTransition(() => {
						setLeftright(!leftright);
					});
				}}
			>
				Do it
			</button>

			<div view-transition-group>
				<div className="flex flex-row gap-2">
					<p className="p-2 bg-white rounded text-black">Sentence:</p>
					{activeWords.map((word) => (
						<p
							className="p-2 bg-white rounded text-black cursor-pointer"
							{...{ "view-transition-name": word }}
							key={word}
							onClick={() => {
								document.startViewTransition(() => {
									// Instead of completely removing, consider hiding the element
									setActiveWords((prev) => prev.filter((w) => w !== word));
								});
							}}
						>
							{word}
						</p>
					))}
				</div>
				<hr className="my-5"/>
				<div className="flex flex-row gap-2">
					<p className="p-2 bg-white rounded text-black">Bank:</p>
					{wordbank
						.filter((word) => !activeWords.includes(word))
						.map((word) => (
							<p
								className="p-2 bg-white rounded text-black cursor-pointer"
								{...{ "view-transition-name": word }}
								key={word}
								onClick={() => {
									document.startViewTransition(() => {
										setActiveWords((prev) => [...prev, word]);
									});
								}}
							>
								{word}
							</p>
						))}
				</div>
			</div>
		</>
	);
}
