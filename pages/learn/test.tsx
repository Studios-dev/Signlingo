import { useEffect, useState } from "react";
import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { useQuery } from "@tanstack/react-query";

export default function Test() {
	const groq = createGroq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY! });
	const query = useQuery({
		queryFn: () =>
			generateText({
				model: groq("meta-llama/llama-4-scout-17b-16e-instruct"),
        prompt: "Write a vegetarian lasagna recipe for 4 people.",
      }),
		queryKey: ["ai"],
		// initialData: undefined,
	});

	return (
		<>
			<div>{JSON.stringify(query.data)}</div>
		</>
	);
}
