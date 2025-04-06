import { Lesson, WordBankQuestion } from "./lesson";

export const getLesson = (lesson: number) => {
	const lessons: Record<number, Lesson> = {
		[lessonOne.lessonId]: lessonOne,
	};

	return lessons[lesson] ?? lessonOne;
};

const lessonOne: Lesson = {
	name: "Restaurant Basics Part One",
	lessonId: 0,
	questions: [
		{
			type: "fillintheblank",
			answer: "food",
			prompt: "Me want%blank%",
			hint: "In ASL, sentences are worded differently than in English. Over time, you'll gain an intuitive understanding of ASL's structure",
			extraWords: ["think", "a", "stand", "food", "stop"],
		},

		{
			type: "fillintheblank",
			answer: "me",
			prompt: "Tomorrow restaurant%blank%go",
			hint: "In ASL, we generally favor me over I because pronouns don't change form",
			extraWords: ["I", "me", "my", "stop"],
		},
		{
			type: "videomultiplechoice",
			answer: "drink",
			prompt: "Please select the word that best matches the video",
			hint: "Tap the question mark at the bottom whenever you don't recognize a word",
			definition: "To take (a liquid) into the mouth and swallow",
			videoUrl:
				"https://main-bucket-signlab-us.s3.us-east-2.amazonaws.com/signs/medium-size/mp4-videos/A-Z_From_Down_T4[15s].mp4",
			extraWords: [
				"apple",
				"me",
				"stand",
				"stop",
				"drink",
				"pizza",
				"think",
			],
		},
		{
			type: "rearrange",
			answer: ["me", "eat", "pizza"],
			prompt: "I am eating pizza",
			words: ["pizza", "eat", "me"],
		},

		{
			type: "videomultiplechoice",
			answer: "me",
			prompt: "Please select the word that best matches the video",
			videoUrl: "/videos/me.mp4",
			definition:
				"used by a speaker to refer to himself or herself as the object of a verb phrase",
			extraWords: ["my", "think", "me", "small", "want", "food"],
		},
		
		{
			type: "wordbank",
			prompt: "I am eating in the restaurant",
			hint: "Think about the previous question structure- subject, verb, object",
			answer: ["me", "eat", "restaurant"],
			extraWordBank: ["restaurant", "I", "eating", "me", "eat", "the"],
		},
		{
			type: "record",
			answer: "me",
			prompt: "me",
			hint: "Point your index finger at yourself and touch your chest",
		},
	],
};


const lessonTwo: Lesson = {
	name: "Restaurant Basics Part Two",
	lessonId: 1,
	questions: [
		{
			type: "rearrange",
			answer: ["me", "want", "drink"],
			prompt: "I want a drink",
			words: ["want", "drink", "me"],
		},
		{
			type: "fillintheblank",
			answer: "eat",
			prompt: "You want%blank%what",
			extraWords: ["stop", "eat", "go", "apple", "think"],
		},
		
		{
			type: "videomultiplechoice",
			answer: "eat",
			prompt: "Please select the word that best matches the video",
			definition: "to put food in your mouth and swallow it",
			extraWords: ["me", "eat", "go", "think", "food"],
		},
		
		{
			type: "fillintheblank",
			answer: "restaurant",
			prompt: "We go%blank%now",
			extraWords: ["stop", "go", "restaurant", "eat", "apple"],
		},
		{
			type: "wordbank",
			prompt: "I want pizza now",
			answer: ["me", "want", "pizza", "now"],
			extraWordBank: ["I", "want", "pizza", "now", "eat", "me"],
		},
		{
			type: "videomultiplechoice",
			answer: "apple",
			prompt: "Please select the word that best matches the video",
			definition: "the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh.",
			extraWords: ["stop", "me", "pizza", "think", "want", "small"],
		},
		{
			type: "record",
			answer: "eat",
			prompt: "eat",
		},
	],
};
