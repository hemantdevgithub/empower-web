export type TQuiz = {
  id?: string;
  lesson?: string;
  question: string;
  options: string[];
  correctOption: string;
  redoQuiz: string;
  questionType: string;
  timer: number;
  selectedAns?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TSubmittedQuiz = {
  id?: string;
  question: string;
  options: string[];
  correctOption: string;
  selectedAns?: string;
};

export type TQuizTestResult = {
  id?: string;
  totalMark: number;
  achievedMark: number;
  lesson?: string;
  quizzes: TSubmittedQuiz[];
};
