export interface WordBankQuestion {
	type: "wordbank"
	/** Information about the question */
	prompt: string;
	answer: string[];
	/** Does not need to include the words in answer, they will automatically be included */
	extraWordBank: string[];
}

export interface VideoWordBankQuestion {
	type: "videowordbank"
	/** Information about the question */
	prompt: string;
	answer: string[];
	videoUrl: string;
	/** Does not need to include the words in answer, they will automatically be included */
	extraWordBank: string[];
}

export interface VideoMultipleChoiceQuestion {
	type: "videomultiplechoice"
	/** Information about the question */
	prompt: string;
	answer: string;
	videoUrl: string;
	wrongChoices: string[];
}

export interface RearrangeQuestion {
	type: "rearrange"
	/** Information about the question */
	prompt: string;
	answer: string[];
	/** Does not need to include the words in answer, they will automatically be included */
	extraWordBank: string[];
}

export interface RecordQuestion {
	type: "record"
	/** Information about the question */
	prompt: string;
	answer: string;
}

export interface Lesson {
	name: string;
	lessonId: number;
	questions: (WordBankQuestion | VideoMultipleChoiceQuestion | VideoWordBankQuestion | RearrangeQuestion | RecordQuestion)[]
}