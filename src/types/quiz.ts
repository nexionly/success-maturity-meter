export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
    points: number;
  }[];
}

export interface QuizResponse {
  questionId: number;
  selectedOption: string;
  points: number;
}

export interface UserInfo {
  fullName: string;
  email: string;
  companyName: string;
  companySize: string;
  role?: string;
}

export interface QuizResults {
  totalScore: number;
  maturityLevel: string;
  categoryScores: {
    onboarding: number;
    customerOutcomes: number;
    qbrs: number;
    aiUtilization: number;
    overallStrategy: number;
  };
}

export interface WebhookPayload {
  userInfo: UserInfo;
  responses: QuizResponse[];
  results: QuizResults;
  timestamp: string;
}