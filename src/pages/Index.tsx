import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BauhausShapes } from '@/components/BauhausShapes';
import { TrendingUp, Target, Users, Clock, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-20 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">CSBenchmark</div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-primary font-medium">About</a>
              <a href="#services" className="text-gray-600 hover:text-primary font-medium">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-primary font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <BauhausShapes variant="hero" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Benchmark Your
              <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Customer Success
              </span>
              Maturity
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take our comprehensive 5-minute assessment designed for B2B SaaS companies with 10-150 employees. 
              Discover where you stand and get actionable recommendations to improve your customer success processes.
            </p>

            <div className="mb-12">
              <Link to="/quiz">
                <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-bold text-lg px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Start Quiz
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">✓ 5-minute assessment ✓ Instant results via email ✓ No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 relative">
        <BauhausShapes variant="floating" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Customer Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our benchmarking quiz helps you identify opportunities to optimize your customer success strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center shadow-lg border-2 border-gray-100 hover:border-primary-light transition-colors hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-bauhaus-red to-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reduce Churn</h3>
                <p className="text-gray-600 leading-relaxed">
                  Identify early warning signs and implement proactive strategies to retain more customers 
                  and increase lifetime value.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-2 border-gray-100 hover:border-primary-light transition-colors hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-bauhaus-yellow to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Accelerate Time-to-Value</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimize your onboarding process to help customers realize value faster and 
                  achieve their goals more efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-2 border-gray-100 hover:border-primary-light transition-colors hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Drive Expansion Revenue</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build systematic approaches to identify upsell and cross-sell opportunities 
                  within your existing customer base.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Info Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  How It Works
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Take the Assessment</h3>
                      <p className="text-gray-600">Answer 10 multiple-choice questions covering onboarding, customer outcomes, QBRs, AI utilization, and overall strategy.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Score</h3>
                      <p className="text-gray-600">Receive a detailed breakdown of your maturity level across four key focus areas of customer success.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Recommendations</h3>
                      <p className="text-gray-600">Get personalized action items, tools, and resources tailored to your current maturity level and improvement areas.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Card className="shadow-2xl border-2 border-gray-100">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Growing Teams</h3>
                      <p className="text-gray-600 mb-6">
                        Specifically designed for B2B SaaS companies with 10-150 employees who want to scale their customer success operations.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <strong>Assessment covers:</strong> Onboarding • Customer Outcomes • QBRs • AI Utilization • Overall Strategy
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-bauhaus-yellow rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-bauhaus-red transform rotate-45 opacity-15"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-bauhaus-yellow transform rotate-45 opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Benchmark Your Customer Success?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of B2B SaaS leaders who have used our assessment to improve their customer success processes.
            </p>
            <Link to="/quiz">
              <Button className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-light mb-4">CSBenchmark</div>
            <p className="text-gray-400 mb-4">
              Helping B2B SaaS companies optimize their customer success processes
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#about" className="text-gray-400 hover:text-white">About</a>
              <a href="#services" className="text-gray-400 hover:text-white">Services</a>
              <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;