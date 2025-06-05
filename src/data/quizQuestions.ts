import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Onboarding Process",
    question: "How structured is your customer onboarding process?",
    options: [
      { letter: 'A', text: "We don't have a formal onboarding process", points: 1 },
      { letter: 'B', text: "We have a basic checklist we follow", points: 2 },
      { letter: 'C', text: "We have a documented process with some customization", points: 3 },
      { letter: 'D', text: "We have a fully documented, repeatable process with clear milestones", points: 4 },
      { letter: 'E', text: "We have an optimized, data-driven onboarding process with continuous improvement", points: 5 }
    ]
  },
  {
    id: 2,
    category: "Onboarding Process",
    question: "How do you measure onboarding success?",
    options: [
      { letter: 'A', text: "We don't formally measure onboarding success", points: 1 },
      { letter: 'B', text: "We track basic completion of onboarding steps", points: 2 },
      { letter: 'C', text: "We measure time-to-value and initial product adoption", points: 3 },
      { letter: 'D', text: "We track multiple metrics including customer satisfaction during onboarding", points: 4 },
      { letter: 'E', text: "We have comprehensive onboarding KPIs tied to long-term success metrics", points: 5 }
    ]
  },
  {
    id: 3,
    category: "Customer Outcomes",
    question: "How do you identify and track customer goals and desired outcomes?",
    options: [
      { letter: 'A', text: "We don't formally track customer goals", points: 1 },
      { letter: 'B', text: "We informally discuss goals during sales but don't systematically track them", points: 2 },
      { letter: 'C', text: "We document goals at the start but rarely revisit them", points: 3 },
      { letter: 'D', text: "We have a process to document and regularly review progress toward goals", points: 4 },
      { letter: 'E', text: "We have a robust system for defining, tracking, and optimizing toward customer outcomes", points: 5 }
    ]
  },
  {
    id: 4,
    category: "Customer Outcomes",
    question: "How do you measure the value your customers receive from your product?",
    options: [
      { letter: 'A', text: "We don't formally measure customer value", points: 1 },
      { letter: 'B', text: "We track basic usage metrics", points: 2 },
      { letter: 'C', text: "We track usage and some business impact metrics", points: 3 },
      { letter: 'D', text: "We have defined value metrics for different customer segments", points: 4 },
      { letter: 'E', text: "We quantify ROI and business impact with customers regularly", points: 5 }
    ]
  },
  {
    id: 5,
    category: "Customer Outcomes",
    question: "How proactive is your approach to customer risk management?",
    options: [
      { letter: 'A', text: "We typically react to problems after customers report them", points: 1 },
      { letter: 'B', text: "We have basic health scores but limited proactive outreach", points: 2 },
      { letter: 'C', text: "We have defined risk indicators and some proactive processes", points: 3 },
      { letter: 'D', text: "We have a systematic approach to identifying and addressing risks", points: 4 },
      { letter: 'E', text: "We have predictive risk models and automated intervention processes", points: 5 }
    ]
  },
  {
    id: 6,
    category: "QBRs",
    question: "How consistently do you conduct QBRs with your customers?",
    options: [
      { letter: 'A', text: "We don't conduct formal QBRs", points: 1 },
      { letter: 'B', text: "We conduct QBRs inconsistently or only with top customers", points: 2 },
      { letter: 'C', text: "We conduct QBRs with most customers but without a consistent format", points: 3 },
      { letter: 'D', text: "We have a structured QBR process for all customers above a certain threshold", points: 4 },
      { letter: 'E', text: "We have a tiered, data-driven QBR program customized by customer segment", points: 5 }
    ]
  },
  {
    id: 7,
    category: "QBRs",
    question: "What data do you include in your QBR presentations?",
    options: [
      { letter: 'A', text: "Basic usage statistics and account updates", points: 1 },
      { letter: 'B', text: "Usage trends and feature adoption", points: 2 },
      { letter: 'C', text: "Progress against customer goals and success metrics", points: 3 },
      { letter: 'D', text: "Comprehensive ROI analysis and strategic recommendations", points: 4 },
      { letter: 'E', text: "Predictive insights, benchmarking, and strategic business planning", points: 5 }
    ]
  },
  {
    id: 8,
    category: "AI Utilization",
    question: "How are you currently utilizing AI in your customer success processes?",
    options: [
      { letter: 'A', text: "We don't currently use AI in our customer success processes", points: 1 },
      { letter: 'B', text: "We're exploring AI but haven't implemented any solutions", points: 2 },
      { letter: 'C', text: "We use basic AI for things like chatbots or simple analytics", points: 3 },
      { letter: 'D', text: "We've integrated AI into multiple customer success workflows", points: 4 },
      { letter: 'E', text: "AI is core to our customer success strategy with multiple advanced applications", points: 5 }
    ]
  },
  {
    id: 9,
    category: "AI Utilization",
    question: "How do you use data to predict and improve customer outcomes?",
    options: [
      { letter: 'A', text: "We primarily use anecdotal information and manual tracking", points: 1 },
      { letter: 'B', text: "We collect data but analysis is mostly reactive and manual", points: 2 },
      { letter: 'C', text: "We have basic reporting dashboards with some predictive elements", points: 3 },
      { letter: 'D', text: "We use data models to predict outcomes and guide CS activities", points: 4 },
      { letter: 'E', text: "We have advanced predictive analytics driving automated workflows", points: 5 }
    ]
  },
  {
    id: 10,
    category: "Overall CS Strategy",
    question: "How integrated is your customer success function with other departments?",
    options: [
      { letter: 'A', text: "CS operates mostly in isolation", points: 1 },
      { letter: 'B', text: "CS has informal collaboration with other teams", points: 2 },
      { letter: 'C', text: "CS has established processes for working with sales and support", points: 3 },
      { letter: 'D', text: "CS is well-integrated across the customer lifecycle with multiple teams", points: 4 },
      { letter: 'E', text: "CS strategy is central to company operations with executive visibility", points: 5 }
    ]
  }
];

export const companySizes = [
  "1-10 employees",
  "11-25 employees", 
  "26-50 employees",
  "51-100 employees",
  "101-150 employees"
];