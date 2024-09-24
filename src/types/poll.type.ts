export type TPoll = {
  id: string;
  question: string;
};

export type TPollAnswerResponse = {
  chosenAnswer: string;
  statistics: {
    yesCount: number;
    noCount: number;
    maybeCount: number;
    totalParticipants: number;
  };
};
