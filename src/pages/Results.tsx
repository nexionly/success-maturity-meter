import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BauhausShapes } from '@/components/BauhausShapes';
import { BarChart3, RefreshCw, Home } from 'lucide-react';
import { QuizResponse, QuizResults } from '@/types/quiz';
import { calculateResults } from '@/utils/quizUtils';

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [results, setResults] = useState<QuizResults | null>(null);

  useEffect(() => {
    // First try to get results from navigation state
    if (location.state?.results) {
      setResults(location.state.results);
    } else {
      // Fallback to localStorage if no state (direct navigation)
      const savedResponses = localStorage.getItem('quizResponses');
      if (savedResponses) {
        const responses: QuizResponse[] = JSON.parse(savedResponses);
        const calculatedResults = calculateResults(responses);
        setResults(calculatedResults);
      } else {
        // No data available, redirect to quiz
        navigate('/quiz');
      }
    }
  }, [location.state, navigate]);

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
      
      <div className="container mx-auto px-4 py-4 md:py-8 max-w-4xl relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <div className="mb-4 md:mb-6">
            <BarChart3 className="w-16 md:w-20 h-16 md:h-20 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
              Your Results
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Here's your Customer Success maturity assessment breakdown
            </p>
          </div>
        </div>

        {/* Overall Score and Maturity Level */}
        <div className="mb-6 md:mb-8">
          <Card className="shadow-lg border-2 border-gray-100">
            <CardHeader className={`${getMaturityColor(results.maturityLevel)} text-white text-center p-4 md:p-6`}>
              <CardTitle className="text-xl md:text-2xl">
                {results.maturityLevel}
              </CardTitle>
              <p className="text-base md:text-lg opacity-90">
                {results.totalScore} out of 50 points
              </p>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm text-gray-500">{results.totalScore}/50</span>
                </div>
                <Progress value={(results.totalScore / 50) * 100} className="h-3" />
              </div>
              <p className="text-gray-600 text-center text-sm md:text-base">
                {results.maturityLevel === 'Foundational Stage' && 'Your customer success function is in its early stages with significant opportunity for development.'}
                {results.maturityLevel === 'Developing Stage' && 'You have established some customer success practices but lack consistency and depth.'}
                {results.maturityLevel === 'Established Stage' && 'You have a solid customer success foundation with good practices in place.'}
                {results.maturityLevel === 'Advanced Stage' && 'You have a sophisticated customer success operation with data-driven processes.'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <div className="mb-6 md:mb-8">
          <Card className="shadow-lg border-2 border-gray-100">
            <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-white text-center p-4 md:p-6">
              <CardTitle className="flex items-center justify-center space-x-2">
                <BarChart3 className="w-5 md:w-6 h-5 md:h-6" />
                <span className="text-lg md:text-xl">Category Breakdown</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-4 md:space-y-6">
                {getCategoryData().map((category, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 text-sm md:text-base">{category.name}</span>
                      <span className="text-xs md:text-sm text-gray-500">{category.score}/{category.maxScore}</span>
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

        <div className="text-center space-y-4 pb-8">
          <p className="text-gray-600 text-sm md:text-base px-4">
            Want to assess another team or take the quiz again?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-primary min-h-[44px] w-full sm:w-auto"
            >
              <Home size={16} />
              <span>Return to Home</span>
            </Button>
            <Button
              onClick={handleRetakeQuiz}
              variant="outline"
              className="flex items-center justify-center space-x-2 border-2 border-primary text-primary hover:bg-primary hover:text-white min-h-[44px] w-full sm:w-auto"
            >
              <RefreshCw size={16} />
              <span>Retake Quiz</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;