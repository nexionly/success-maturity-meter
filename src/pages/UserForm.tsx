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

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
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

      // Prepare webhook payload
      const payload = {
        userInfo,
        responses,
        results,
        timestamp: new Date().toISOString()
      };

      // Send to webhook
      const success = await sendToWebhook(payload);

      if (success) {
        // Clear quiz data from localStorage
        localStorage.removeItem('quizResponses');
        navigate('/results');
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
      
      <div className="container mx-auto px-4 py-8 max-w-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Almost Done!
          </h1>
          <p className="text-lg text-gray-600">
            Enter your information to receive your personalized benchmarking results
          </p>
        </div>

        <Card className="shadow-lg border-2 border-gray-100">
          <CardHeader className="text-center bg-gradient-to-r from-primary to-primary-light text-white">
            <CardTitle className="text-xl">Your Information</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={userInfo.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="border-2 border-gray-200 focus:border-primary"
                    placeholder="Enter your full name"
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
                    className="border-2 border-gray-200 focus:border-primary"
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
                  className="border-2 border-gray-200 focus:border-primary"
                  placeholder="Enter your company name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companySize" className="text-sm font-medium">
                    Company Size *
                  </Label>
                  <Select value={userInfo.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                    <SelectTrigger className="border-2 border-gray-200 focus:border-primary">
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
                    className="border-2 border-gray-200 focus:border-primary"
                    placeholder="e.g., Founder, VP Customer Success"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border">
                <p className="text-sm text-gray-600">
                  <strong>Privacy Notice:</strong> Your information will be used to send you personalized 
                  benchmarking results and relevant customer success resources. We respect your privacy 
                  and will not share your data with third parties.
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-semibold py-3 text-lg"
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