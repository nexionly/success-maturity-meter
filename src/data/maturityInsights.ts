export interface MaturityInsight {
  level: string;
  description: string;
  keyStrengths: string[];
  priorityActions: string[];
  resources: {
    title: string;
    description: string;
    type: 'article' | 'template' | 'checklist' | 'guide';
  }[];
}

export const maturityInsights: Record<string, MaturityInsight> = {
  'Foundational Stage': {
    level: 'Foundational Stage',
    description: 'Your customer success function is in its early stages. You have basic processes but significant opportunity exists to build more structured, scalable practices.',
    keyStrengths: [
      'You have recognized the importance of customer success',
      'Basic customer communication is in place',
      'There is awareness of the need for improvement'
    ],
    priorityActions: [
      'Establish a formal onboarding process with clear milestones',
      'Implement basic customer health scoring',
      'Set up regular check-in cadences with customers',
      'Define key customer success metrics and KPIs',
      'Create customer journey mapping documentation'
    ],
    resources: [
      {
        title: 'Customer Success Fundamentals Checklist',
        description: 'Essential elements every CS team needs to establish',
        type: 'checklist'
      },
      {
        title: 'Building Your First Health Score',
        description: 'Step-by-step guide to creating customer health metrics',
        type: 'guide'
      },
      {
        title: 'Onboarding Process Template',
        description: 'Ready-to-use framework for customer onboarding',
        type: 'template'
      }
    ]
  },
  'Developing Stage': {
    level: 'Developing Stage',
    description: 'You have established some customer success practices but need more consistency and depth. Focus on standardizing processes and improving data-driven decision making.',
    keyStrengths: [
      'Basic customer success processes are established',
      'Some customer health monitoring is in place',
      'Regular customer communication occurs'
    ],
    priorityActions: [
      'Standardize and document all customer success processes',
      'Implement more sophisticated health scoring with automation',
      'Establish formal QBR processes and templates',
      'Begin tracking leading indicators of customer success',
      'Create playbooks for common customer scenarios'
    ],
    resources: [
      {
        title: 'CS Process Standardization Guide',
        description: 'How to create consistent, repeatable CS processes',
        type: 'guide'
      },
      {
        title: 'Advanced Health Scoring Framework',
        description: 'Multi-dimensional approach to customer health',
        type: 'template'
      },
      {
        title: 'QBR Excellence Toolkit',
        description: 'Templates and best practices for impactful QBRs',
        type: 'template'
      }
    ]
  },
  'Established Stage': {
    level: 'Established Stage',
    description: 'You have a solid customer success foundation with good practices in place. Focus on optimization, advanced analytics, and proactive customer management.',
    keyStrengths: [
      'Structured processes and workflows are established',
      'Customer health monitoring is systematic',
      'Regular QBRs and strategic conversations occur',
      'Data-driven decision making is present'
    ],
    priorityActions: [
      'Implement predictive analytics for churn prevention',
      'Develop advanced segmentation strategies',
      'Create automated workflows for common CS activities',
      'Build cross-functional alignment with sales and product',
      'Establish customer advocacy and expansion programs'
    ],
    resources: [
      {
        title: 'Predictive Analytics in Customer Success',
        description: 'Using data to predict and prevent churn',
        type: 'guide'
      },
      {
        title: 'Customer Segmentation Strategies',
        description: 'Advanced approaches to customer categorization',
        type: 'article'
      },
      {
        title: 'CS-Sales Alignment Framework',
        description: 'Building effective cross-team collaboration',
        type: 'template'
      }
    ]
  },
  'Advanced Stage': {
    level: 'Advanced Stage',
    description: 'You have a sophisticated customer success operation with data-driven processes and AI integration. Focus on innovation, scaling excellence, and industry leadership.',
    keyStrengths: [
      'Advanced analytics and AI are integrated into workflows',
      'Predictive customer success management is operational',
      'Strong cross-functional alignment exists',
      'Customer success directly drives business growth'
    ],
    priorityActions: [
      'Develop industry-leading customer success innovations',
      'Build strategic customer advisory programs',
      'Create thought leadership content and speak at industry events',
      'Mentor other CS teams and share best practices',
      'Explore emerging technologies for CS enhancement'
    ],
    resources: [
      {
        title: 'CS Innovation Playbook',
        description: 'Strategies for pioneering new CS approaches',
        type: 'guide'
      },
      {
        title: 'Building Customer Advisory Boards',
        description: 'Creating strategic customer partnership programs',
        type: 'template'
      },
      {
        title: 'Thought Leadership in CS',
        description: 'Establishing your team as industry experts',
        type: 'article'
      }
    ]
  }
};

export const getCategoryInsights = (categoryName: string, score: number, maxScore: number) => {
  const percentage = (score / maxScore) * 100;
  
  const insights = {
    'Onboarding Process': {
      excellent: 'Your onboarding process is well-structured and effective at setting customers up for success.',
      good: 'Your onboarding has solid foundations but could benefit from more personalization and milestone tracking.',
      needs_improvement: 'Your onboarding process needs significant enhancement to ensure customer success from day one.'
    },
    'Customer Outcomes': {
      excellent: 'You excel at tracking and delivering measurable customer outcomes and value.',
      good: 'You track some customer outcomes but could improve measurement and value demonstration.',
      needs_improvement: 'Focus on establishing clear outcome metrics and value demonstration processes.'
    },
    'QBRs': {
      excellent: 'Your QBR process drives strategic conversations and deepens customer relationships.',
      good: 'Your QBRs are regular but could be more strategic and outcome-focused.',
      needs_improvement: 'Implement a structured QBR process to create strategic customer touchpoints.'
    },
    'AI Utilization': {
      excellent: 'You leverage AI effectively to enhance customer success operations and insights.',
      good: 'You use some AI tools but have opportunities to expand automation and insights.',
      needs_improvement: 'Consider implementing AI tools to scale your customer success efforts and gain better insights.'
    },
    'Overall Strategy': {
      excellent: 'Your customer success strategy is comprehensive and well-integrated with business objectives.',
      good: 'Your strategy is solid but could benefit from better alignment and more proactive planning.',
      needs_improvement: 'Develop a more strategic approach to customer success with clear goals and metrics.'
    }
  };

  const categoryInsights = insights[categoryName as keyof typeof insights];
  if (!categoryInsights) return 'Continue focusing on this area for improvement.';

  if (percentage >= 80) return categoryInsights.excellent;
  if (percentage >= 60) return categoryInsights.good;
  return categoryInsights.needs_improvement;
};