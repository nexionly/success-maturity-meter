import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BauhausShapes } from '@/components/BauhausShapes';
import { CheckCircle, Mail, RefreshCw } from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    // Clear any existing data
    localStorage.removeItem('quizResponses');
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-white relative">
      <BauhausShapes variant="hero" />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your Customer Success benchmarking assessment has been successfully submitted.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-lg border-2 border-gray-100">
            <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-white text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Mail className="w-6 h-6" />
                <span>What's Next?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <p className="text-gray-700">
                    You'll receive your detailed benchmarking results via email within 24 hours.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <p className="text-gray-700">
                    Your report will include your maturity level, category breakdowns, and personalized recommendations.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <p className="text-gray-700">
                    We'll also send you relevant resources and tools to help improve your customer success processes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 border-gray-100">
            <CardHeader className="bg-gradient-to-r from-bauhaus-yellow to-bauhaus-red text-white text-center">
              <CardTitle>Maturity Levels Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-200 rounded"></div>
                  <span className="font-semibold text-sm">Foundational Stage</span>
                  <span className="text-gray-600 text-sm">(10-20 points)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-200 rounded"></div>
                  <span className="font-semibold text-sm">Developing Stage</span>
                  <span className="text-gray-600 text-sm">(21-30 points)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-200 rounded"></div>
                  <span className="font-semibold text-sm">Established Stage</span>
                  <span className="text-gray-600 text-sm">(31-40 points)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-200 rounded"></div>
                  <span className="font-semibold text-sm">Advanced Stage</span>
                  <span className="text-gray-600 text-sm">(41-50 points)</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Your detailed breakdown will show exactly where you stand and how to improve.
              </p>
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

        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-50 p-6 rounded-lg border">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Questions or need immediate assistance?</strong>
            </p>
            <p className="text-sm text-gray-600">
              Contact us at <a href="mailto:support@yourcompany.com" className="text-primary hover:underline">support@yourcompany.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;