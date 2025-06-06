import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BauhausShapes } from '@/components/BauhausShapes';
import { companySizes } from '@/data/quizQuestions';
import { UserInfo, QuizResponse } from '@/types/quiz';
import { calculateResults, sendToWebhook } from '@/utils/quizUtils';
import { useToast } from '@/hooks/use-toast';

const UserForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: '',
    email: '',
    companyName: '',
    companySize: '',
    role: ''
  });

  // Simple math captcha
  const [captcha, setCaptcha] = useState(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  });
  const [captchaInput, setCaptchaInput] = useState('');

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const regenerateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2 });
    setCaptchaInput('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userInfo.fullName || !userInfo.email || !userInfo.companyName || !userInfo.companySize) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      toast({
        title: "Incorrect captcha",
        description: "Please solve the math problem correctly",
        variant: "destructive"
      });
      regenerateCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      // Get quiz responses from localStorage
      const savedResponses = localStorage.getItem('quizResponses');
      if (!savedResponses) {
        toast({
          title: "Quiz responses not found",
          description: "Please retake the quiz",
          variant: "destructive"
        });
        navigate('/quiz');
        return;
      }

      const responses: QuizResponse[] = JSON.parse(savedResponses);
      const results = calculateResults(responses);

      // Import quiz questions to get question text
      const { quizQuestions } = await import('@/data/quizQuestions');

      // Prepare webhook payload in the required format
      const payload = {
        user: {
          name: userInfo.fullName,
          email: userInfo.email,
          company: userInfo.companyName,
          companySize: userInfo.companySize,
          role: userInfo.role || ''
        },
        responses: responses.map(response => {
          const question = quizQuestions.find(q => q.id === response.questionId);
          const option = question?.options.find(opt => opt.letter === response.selectedOption);
          return {
            questionId: response.questionId,
            questionText: question?.question || '',
            selectedOption: option?.text || response.selectedOption,
            pointValue: response.points
          };
        }),
        scores: {
          total: results.totalScore,
          onboarding: results.categoryScores.onboarding,
          outcomes: results.categoryScores.customerOutcomes,
          qbrs: results.categoryScores.qbrs,
          ai: results.categoryScores.aiUtilization,
          strategy: results.categoryScores.overallStrategy
        },
        maturityLevel: results.maturityLevel.replace(' Stage', ''),
        timestamp: new Date().toISOString()
      };

      // Send to webhook
      const success = await sendToWebhook(payload);

      if (success) {
        // Pass results to the results page and then clear localStorage
        navigate('/results', { state: { results } });
        // Clear quiz data from localStorage after navigation
        localStorage.removeItem('quizResponses');
      } else {
        throw new Error('Failed to submit results');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact support",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <BauhausShapes variant="accent" />
      
      <div className="container mx-auto px-4 py-4 md:py-8 max-w-2xl relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            Almost Done!
          </h1>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Enter your information to receive your personalized benchmarking results
          </p>
        </div>

        <Card className="shadow-lg border-2 border-gray-100">
          <CardHeader className="text-center bg-gradient-to-r from-primary to-primary-light text-white p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl">Your Information</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={userInfo.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="border-2 border-gray-200 focus:border-primary min-h-[44px]"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-2 border-gray-200 focus:border-primary min-h-[44px]"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-sm font-medium">
                  Company Name *
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  value={userInfo.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="border-2 border-gray-200 focus:border-primary min-h-[44px]"
                  placeholder="Enter your company name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companySize" className="text-sm font-medium">
                    Company Size *
                  </Label>
                  <Select value={userInfo.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                    <SelectTrigger className="border-2 border-gray-200 focus:border-primary min-h-[44px]">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-medium">
                    Role (Optional)
                  </Label>
                  <Input
                    id="role"
                    type="text"
                    value={userInfo.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="border-2 border-gray-200 focus:border-primary min-h-[44px]"
                    placeholder="e.g., Founder, VP Customer Success"
                  />
                </div>
              </div>

              {/* Captcha */}
              <div className="space-y-2">
                <Label htmlFor="captcha" className="text-sm font-medium">
                  Security Check: What is {captcha.num1} + {captcha.num2}? *
                </Label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    id="captcha"
                    type="number"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="border-2 border-gray-200 focus:border-primary flex-1 min-h-[44px]"
                    placeholder="Enter the answer"
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={regenerateCaptcha}
                    className="border-2 border-gray-300 hover:border-primary min-h-[44px] sm:px-3 sm:w-auto w-full"
                  >
                    <span className="sm:hidden">Generate New Problem</span>
                    <span className="hidden sm:inline">New Problem</span>
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-3 md:p-4 rounded-lg border">
                <p className="text-xs md:text-sm text-gray-600">
                  <strong>Privacy Notice:</strong> Your information will be used to send you personalized 
                  benchmarking results and relevant customer success resources. We respect your privacy 
                  and will not share your data with third parties.
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-semibold py-3 text-base md:text-lg min-h-[48px]"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Results'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserForm;