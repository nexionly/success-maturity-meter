import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BauhausShapes } from '@/components/BauhausShapes';
import { BarChart3, RefreshCw } from 'lucide-react';
import { QuizResponse, QuizResults } from '@/types/quiz';
import { calculateResults } from '@/utils/quizUtils';

const Results = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<QuizResults | null>(null);

  useEffect(() => {
    const savedResponses = localStorage.getItem('quizResponses');
    if (savedResponses) {
      const responses: QuizResponse[] = JSON.parse(savedResponses);
      const calculatedResults = calculateResults(responses);
      setResults(calculatedResults);
    }
  }, []);

  const handleRetakeQuiz = () => {
    // Clear any existing data
    localStorage.removeItem('quizResponses');
    navigate('/quiz');
  };

  const getMaturityColor = (level: string) => {
    switch (level.replace(' Stage', '')) {
      case 'Foundational': return 'bg-red-500';
      case 'Developing': return 'bg-yellow-500';
      case 'Established': return 'bg-blue-500';
      case 'Advanced': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryData = () => {
    if (!results) return [];
    
    return [
      { 
        name: 'Onboarding Process', 
        score: results.categoryScores.onboarding, 
        maxScore: 10,
        percentage: (results.categoryScores.onboarding / 10) * 100
      },
      { 
        name: 'Customer Outcomes', 
        score: results.categoryScores.customerOutcomes, 
        maxScore: 15,
        percentage: (results.categoryScores.customerOutcomes / 15) * 100
      },
      { 
        name: 'QBRs', 
        score: results.categoryScores.qbrs, 
        maxScore: 10,
        percentage: (results.categoryScores.qbrs / 10) * 100
      },
      { 
        name: 'AI Utilization', 
        score: results.categoryScores.aiUtilization, 
        maxScore: 10,
        percentage: (results.categoryScores.aiUtilization / 10) * 100
      },
      { 
        name: 'Overall Strategy', 
        score: results.categoryScores.overallStrategy, 
        maxScore: 5,
        percentage: (results.categoryScores.overallStrategy / 5) * 100
      }
    ];
  };

  if (!results) {
    return (
      <div className="min-h-screen bg-white relative flex items-center justify-center">
        <BauhausShapes variant="hero" />
        <div className="relative z-10">
          <p className="text-xl text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      <BauhausShapes variant="hero" />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <div className="mb-6">
            <BarChart3 className="w-20 h-20 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Results
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's your Customer Success maturity assessment breakdown
            </p>
          </div>
        </div>

        {/* Overall Score and Maturity Level */}
        <div className="mb-8">
          <Card className="shadow-lg border-2 border-gray-100">
            <CardHeader className={`${getMaturityColor(results.maturityLevel)} text-white text-center`}>
              <CardTitle className="text-2xl">
                {results.maturityLevel}
              </CardTitle>
              <p className="text-lg opacity-90">
                {results.totalScore} out of 50 points
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm text-gray-500">{results.totalScore}/50</span>
                </div>
                <Progress value={(results.totalScore / 50) * 100} className="h-3" />
              </div>
              <p className="text-gray-600 text-center">
                {results.maturityLevel === 'Foundational Stage' && 'Your customer success function is in its early stages with significant opportunity for development.'}
                {results.maturityLevel === 'Developing Stage' && 'You have established some customer success practices but lack consistency and depth.'}
                {results.maturityLevel === 'Established Stage' && 'You have a solid customer success foundation with good practices in place.'}
                {results.maturityLevel === 'Advanced Stage' && 'You have a sophisticated customer success operation with data-driven processes.'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <div className="mb-8">
          <Card className="shadow-lg border-2 border-gray-100">
            <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-white text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <BarChart3 className="w-6 h-6" />
                <span>Category Breakdown</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {getCategoryData().map((category, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{category.name}</span>
                      <span className="text-sm text-gray-500">{category.score}/{category.maxScore}</span>
                    </div>
                    <Progress value={category.percentage} className="h-3" />
                    <div className="text-xs text-gray-500 mt-1">
                      {category.percentage.toFixed(0)}% complete
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            Want to assess another team or take the quiz again?
          </p>
          <Button
            onClick={handleRetakeQuiz}
            variant="outline"
            className="flex items-center space-x-2 border-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            <RefreshCw size={16} />
            <span>Retake Quiz</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;