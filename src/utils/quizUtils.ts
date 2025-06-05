import { QuizResponse, QuizResults } from '../types/quiz';

export const calculateResults = (responses: QuizResponse[]): QuizResults => {
  const totalScore = responses.reduce((sum, response) => sum + response.points, 0);
  
  // Calculate category scores
  const onboarding = responses.filter(r => r.questionId <= 2).reduce((sum, r) => sum + r.points, 0);
  const customerOutcomes = responses.filter(r => r.questionId >= 3 && r.questionId <= 5).reduce((sum, r) => sum + r.points, 0);
  const qbrs = responses.filter(r => r.questionId >= 6 && r.questionId <= 7).reduce((sum, r) => sum + r.points, 0);
  const aiUtilization = responses.filter(r => r.questionId >= 8 && r.questionId <= 9).reduce((sum, r) => sum + r.points, 0);
  const overallStrategy = responses.filter(r => r.questionId === 10).reduce((sum, r) => sum + r.points, 0);

  // Determine maturity level
  let maturityLevel = '';
  if (totalScore >= 10 && totalScore <= 20) {
    maturityLevel = 'Foundational Stage';
  } else if (totalScore >= 21 && totalScore <= 30) {
    maturityLevel = 'Developing Stage';
  } else if (totalScore >= 31 && totalScore <= 40) {
    maturityLevel = 'Established Stage';
  } else if (totalScore >= 41 && totalScore <= 50) {
    maturityLevel = 'Advanced Stage';
  }

  return {
    totalScore,
    maturityLevel,
    categoryScores: {
      onboarding,
      customerOutcomes,
      qbrs,
      aiUtilization,
      overallStrategy
    }
  };
};

export const sendToWebhook = async (payload: any): Promise<boolean> => {
  try {
    const response = await fetch('https://hook.us2.make.com/m3ps2ekobt8law9px26h71xlqcjwurc2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error sending to webhook:', error);
    return false;
  }
};