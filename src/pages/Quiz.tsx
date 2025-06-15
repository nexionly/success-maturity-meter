import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { BauhausShapes } from '@/components/BauhausShapes';
import { quizQuestions } from '@/data/quizQuestions';
import { QuizResponse } from '@/types/quiz';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');

  // Load saved responses from localStorage
  useEffect(() => {
    const savedResponses = localStorage.getItem('quizResponses');
    if (savedResponses) {
      setResponses(JSON.parse(savedResponses));
    }
  }, []);

  // Save responses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('quizResponses', JSON.stringify(responses));
  }, [responses]);

  // Load selected option for current question
  useEffect(() => {
    const existingResponse = responses.find(r => r.questionId === quizQuestions[currentQuestion].id);
    setSelectedOption(existingResponse ? existingResponse.selectedOption : '');
  }, [currentQuestion, responses]);

  const handleOptionSelect = (optionLetter: string) => {
    setSelectedOption(optionLetter);
    
    const question = quizQuestions[currentQuestion];
    const option = question.options.find(opt => opt.letter === optionLetter);
    
    if (!option) return;

    const newResponse: QuizResponse = {
      questionId: question.id,
      selectedOption: optionLetter,
      points: option.points
    };

    setResponses(prev => {
      // Remove any existing response for this question
      const filtered = prev.filter(r => r.questionId !== question.id);
      return [...filtered, newResponse];
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Quiz completed, navigate to user form
      navigate('/user-form');
    }
  };

  const handleQuestionJump = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      <BauhausShapes variant="floating" />
      
      <div className="container mx-auto px-4 py-4 md:py-8 max-w-4xl relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            Customer Success Benchmarking Quiz
          </h1>
          <div className="mb-4 md:mb-6">
            <Progress value={progress} className="w-full h-3" />
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
              <p className="text-xs text-green-600 font-medium">
                {responses.length} answered • Auto-saved
              </p>
            </div>
            
            {/* Quick navigation dots */}
            <div className="flex justify-center space-x-1 mt-3">
              {quizQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionJump(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentQuestion
                      ? 'bg-primary'
                      : responses.find(r => r.questionId === quizQuestions[index].id)
                      ? 'bg-green-400'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to question ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-4 md:mb-8 shadow-lg border-2 border-gray-100 flex-1">
          <CardContent className="p-4 md:p-8">
            <div className="mb-4 md:mb-6">
              <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-3 md:mb-4">
                {question.category}
              </span>
              <h2 className="text-lg md:text-2xl font-semibold text-gray-900 leading-relaxed">
                {question.question}
              </h2>
            </div>

            <RadioGroup value={selectedOption} onValueChange={handleOptionSelect} className="space-y-3 md:space-y-4">
              {question.options.map((option) => (
                <div 
                  key={option.letter} 
                  className="flex items-start space-x-3 p-3 md:p-4 rounded-lg border-2 border-gray-200 hover:border-primary-light transition-colors cursor-pointer min-h-[44px]"
                  onClick={() => handleOptionSelect(option.letter)}
                >
                  <RadioGroupItem 
                    value={option.letter} 
                    id={option.letter}
                    className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary" 
                  />
                  <Label 
                    htmlFor={option.letter} 
                    className="flex-1 cursor-pointer font-medium text-gray-800 leading-relaxed text-sm md:text-base"
                  >
                    <span className="font-bold text-primary mr-2">{option.letter}.</span>
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-auto pt-4 pb-safe space-y-3">
          {/* Touch-friendly navigation for mobile */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-primary min-h-[48px] flex-1"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-primary min-h-[48px] flex-1"
            >
              <Home size={16} />
              <span className="hidden sm:inline">Home</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!selectedOption}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-semibold min-h-[48px] flex-1"
            >
              <span>{currentQuestion === quizQuestions.length - 1 ? 'Complete Quiz' : 'Next'}</span>
              <ArrowRight size={16} />
            </Button>
          </div>
          
          {/* Progress summary */}
          <div className="text-center text-xs text-gray-500 px-4">
            {responses.length > 0 && (
              <span>Progress saved • {Math.round((responses.length / quizQuestions.length) * 100)}% complete</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;