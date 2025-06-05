import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Target, Users, Clock, ArrowRight, CheckCircle, BarChart3, Lightbulb, Star, Zap, Award, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="relative z-20 bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              CSBenchmark
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/quiz" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
              <span className="text-sm font-semibold text-gray-700">2-minute assessment • Instant results • Free</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              A sweet, secret
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Customer Success
              </span>
              ingredient ✨
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Take our deliciously simple 2-minute assessment designed for B2B SaaS companies with 10-150 employees. 
              Discover where you stand and get actionable recipes to improve your customer success processes.
            </p>

            <div className="mb-16">
              <Link to="/quiz">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
                  Start Your Assessment
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <span className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 
                  2-minute assessment
                </span>
                <span className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 
                  Instant results via email
                </span>
                <span className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 
                  No credit card required
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              It's deliciously simple 🍰
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our benchmarking assessment helps you cook up the perfect customer success strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-red-100 to-pink-100 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reduce Churn</h3>
                <p className="text-gray-700 leading-relaxed">
                  Identify early warning signs and implement proactive strategies to retain more customers 
                  and increase lifetime value.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-100 to-purple-100 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Accelerate Time-to-Value</h3>
                <p className="text-gray-700 leading-relaxed">
                  Optimize your onboarding process to help customers realize value faster and 
                  achieve their goals more efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-100 to-emerald-100 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Drive Expansion Revenue</h3>
                <p className="text-gray-700 leading-relaxed">
                  Build systematic approaches to identify upsell and cross-sell opportunities 
                  within your existing customer base.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Process Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Recipes that'll make you go yummy 🚀
              </h2>
              <p className="text-xl text-gray-600">Simple, fast, and comprehensive assessment in three delicious steps</p>
            </div>

            {/* Process Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto shadow-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Take the Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Answer 10 multiple-choice questions covering onboarding, customer outcomes, QBRs, AI utilization, and overall strategy.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-100 to-purple-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto shadow-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Score</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Receive a detailed breakdown of your maturity level across four key focus areas of customer success.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto shadow-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Receive Recommendations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Get personalized action items tailored to your current maturity level and improvement areas.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Assessment Details */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <Users className="w-8 h-8 text-purple-500 mr-3" />
                      <h3 className="text-3xl font-bold text-gray-900">Built for Growing Teams</h3>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      Specifically designed for B2B SaaS companies with 10-150 employees who want to scale their customer success operations.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center bg-purple-50 p-3 rounded-lg">
                        <BarChart3 className="w-5 h-5 text-purple-500 mr-3" />
                        <span className="text-sm font-medium text-gray-700">Onboarding</span>
                      </div>
                      <div className="flex items-center bg-pink-50 p-3 rounded-lg">
                        <Target className="w-5 h-5 text-pink-500 mr-3" />
                        <span className="text-sm font-medium text-gray-700">Customer Outcomes</span>
                      </div>
                      <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <Users className="w-5 h-5 text-blue-500 mr-3" />
                        <span className="text-sm font-medium text-gray-700">QBRs</span>
                      </div>
                      <div className="flex items-center bg-green-50 p-3 rounded-lg">
                        <Lightbulb className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-sm font-medium text-gray-700">AI Utilization</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-center text-white shadow-2xl">
                      <div className="text-7xl font-bold mb-2">10</div>
                      <div className="text-xl font-semibold mb-2">Questions</div>
                      <div className="text-purple-100">Comprehensive coverage of customer success maturity</div>
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-yellow-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white transform rotate-45 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              "Happy to start integrating y'all directly into our workflows now that I've seen the work quality and process!" 🎉
            </h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Get actionable insights to improve your customer success processes.
            </p>
            <Link to="/quiz">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Assessment
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              CSBenchmark
            </div>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed text-lg">
              Helping B2B SaaS companies optimize their customer success processes through data-driven insights.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;