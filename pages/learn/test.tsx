import { useEffect, useState } from "react";
import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { useQuery } from "@tanstack/react-query";

export default function Test() {
  const query = useQuery({
    queryFn: () =>
      generateText({
        model: groq("gemma2-9b-it"),
        prompt: "Write a vegetarian lasagna recipe for 4 people.",
      }),
    queryKey: ["ai"],
    // initialData: undefined,
  });

  return (
    <>
      <div>{JSON.stringify(query)}</div>
    </>
  );
}
