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
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-white relative">
      <BauhausShapes variant="floating" />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Success Benchmarking Quiz
          </h1>
          <div className="mb-6">
            <Progress value={progress} className="w-full h-3" />
            <p className="text-sm text-gray-600 mt-2">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-8 shadow-lg border-2 border-gray-100">
          <CardContent className="p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
                {question.category}
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
                {question.question}
              </h2>
            </div>

            <RadioGroup value={selectedOption} onValueChange={handleOptionSelect} className="space-y-4">
              {question.options.map((option) => (
                <div key={option.letter} className="flex items-start space-x-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary-light transition-colors cursor-pointer">
                  <RadioGroupItem 
                    value={option.letter} 
                    id={option.letter}
                    className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary" 
                  />
                  <Label 
                    htmlFor={option.letter} 
                    className="flex-1 cursor-pointer font-medium text-gray-800 leading-relaxed"
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
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 border-2 border-gray-300 hover:border-primary"
          >
            <ArrowLeft size={16} />
            <span>Previous</span>
          </Button>

          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            className="flex items-center space-x-2 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-semibold px-8 py-3"
          >
            <span>{currentQuestion === quizQuestions.length - 1 ? 'Complete Quiz' : 'Next'}</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;