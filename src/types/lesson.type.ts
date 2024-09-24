import { TQuiz } from "./quiz.type";

export type TLesson = {
  id?: string;
  title: string;
  slug: string;
  thumbnail?: {
    secure_url: string;
    public_id: string;
    public_url: string;
  };
  content: string;
  category: string;
  subCategory?: string;
  authorId?: string;
  createdAt: Date;
  updatedAt?: Date;
  quizzes?: TQuiz[];
};
