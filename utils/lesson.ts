export interface WordBankQuestion {
	type: "wordbank";
	/** Information about the question */
	prompt: string;
	answer: string[];
	hint?: string;
	/** Does not need to include the words in answer, they will automatically be included */
	// this comment is incorrect
	extraWordBank: string[];
}

export interface FillInTheBlankQuestion {
	type: "fillintheblank";
	/** Information about the question, use %blank% for the blank spot */
	prompt: string;
	answer: string;
	hint?: string;
	/** Additional incorrect words shown */
	extraWords: string[];
}

export interface VideoWordBankQuestion {
	type: "videowordbank";
	/** Information about the question */
	prompt: string;
	answer: string[];
	hint?: string;
	videoUrl: string;
	/** Does not need to include the words in answer, they will automatically be included */
	extraWordBank: string[];
}

export interface VideoMultipleChoiceQuestion {
	type: "videomultiplechoice";
	/** Information about the question */
	prompt: string;
	answer: string;
	hint?: string;
	definition: string;
	videoUrl: string;
	extraWords: string[];
}

export interface RearrangeQuestion {
	type: "rearrange";
	/** Information about the question */
	prompt: string;
	answer: string[];
	hint?: string;
	words: string[];
}

export interface RecordQuestion {
	type: "record";
	/** Information about the question */
	prompt: string;
	answer: string;
hint?: string;}


export interface Lesson {
	name: string;
	lessonId: number;
	questions: (
		| WordBankQuestion
		| VideoMultipleChoiceQuestion
		| VideoWordBankQuestion
		| RearrangeQuestion
		| RecordQuestion
		| FillInTheBlankQuestion
	)[];
}
