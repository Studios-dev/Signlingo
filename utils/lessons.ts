import { Lesson, WordBankQuestion } from "./lesson";

export const getLesson = (lesson: number) => {
	const lessons: Record<number, Lesson> = {
		[lessonOne.lessonId]: lessonOne,
	}

	return lessons[lesson] ?? lessonOne;
}

const lessonOne: Lesson = {
	name: "Restaurant Basics Part One",
	lessonId: 0,
	questions: [
		{
			type: "videomultiplechoice",
			answer: "meat",
			prompt: "Please select the word that best matches the video",
			hint: "Tap the question mark at the bottom whenever you don't recognize a word",
			videoUrl: "https://main-bucket-signlab-us.s3.us-east-2.amazonaws.com/signs/medium-size/mp4-videos/A-Z_From_Down_T4[7m37s].mp4",
			extraWords: ["apple", "me", "stand", "stop", "pizza", "think"]
		},
		{
			type: "fillintheblank",
			answer: "me",
			prompt: "Tomorrow restaurant%blank%go",
			hint: "In ASL, we generally favor me over I because pronouns don't change form",
			extraWords: ["I", "me", "my", "stop"],
		},
		{
			type: "fillintheblank",
			answer: "food",
			prompt: "Me want%blank%",
			hint: "In ASL, sentences are worded differently than in English. Over time, you'll gain an intuitive understanding of ASL's structure",
			extraWords: ["think", "a", "stand", "food", "stop"],
		},
		{
			type: "rearrange",
			answer: ["me", "eat", "pizza"],
			prompt: "I am eating pizza",
			words: ["pizza", "eat", "me"]
		},
		
		{
			type: "videomultiplechoice",
			answer: "me",
			prompt: "Please select the word that best matches the video",
			videoUrl: "/videos/me.mp4",
			extraWords: ["my", "think", "big", "small", "want", "food"]
		},
		{
			type: "wordbank",
			prompt: "I am eating in the restauraunt",
			answer: ["restarunt", "me", "eat"],
			extraWordBank: ["I", "eating", "the"]
		},
		{
			type: "record",
			answer: "me",
			prompt: "me",
			hint: "Point your index finger at yourself and touch your chest"
		}
	]
}