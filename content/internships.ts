export type Internship = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location: string;
  projects: InternshipProject[];
  gradient: string;
  icon: string;
};

export type InternshipProject = {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  architecture: {
    components: Component[];
    dataFlow: DataFlow[];
  };
};

export type Component = {
  name: string;
  type: 'service' | 'database' | 'api' | 'frontend' | 'algorithm' | 'storage' | 'model';
  description: string;
  technologies: string[];
};

export type DataFlow = {
  from: string;
  to: string;
  description: string;
  data: string;
};

export const internships: Internship[] = [
  {
    slug: 'amazon-sde-intern',
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    period: 'May 2025 - August 2025',
    location: 'Seattle, USA',
    gradient: 'from-orange-400 via-amber-500 to-yellow-600',
    icon: '🚀',
    projects: [
      {
        title: 'End-to-End Search Query Classification System',
        description: 'Implemented a comprehensive search query classification system to fetch and normalize 50,000 search queries from database, applied LLM prompt templates via Python script to categorize queries into distinct categories, and stored results in Amazon S3.',
        technologies: ['Python', 'LLM', 'Amazon S3', 'Java', 'Spring Boot', 'SQL'],
        highlights: [
          'Fetched and normalized 50,000+ search queries from database using SQL',
          'Applied LLM prompt templates for intelligent query categorization',
          'Stored classifications in Amazon S3 for scalable access',
          'Implemented caching mechanism using HashMap data structure for classification-aligned query execution',
          'Achieved precise category-specific query results using Java Spring Framework'
        ],
        architecture: {
          components: [
            {
              name: 'Query Fetcher',
              type: 'service',
              description: 'Fetches and normalizes search queries from database',
              technologies: ['SQL']
            },
            {
              name: 'LLM Classifier',
              type: 'service',
              description: 'Applies LLM to categorize queries',
              technologies: ['Python', 'LLM API']
            },
            {
              name: 'S3 Storage',
              type: 'storage',
              description: 'Stores query classifications',
              technologies: ['Amazon S3', 'JSON']
            },
            {
              name: 'Cache Layer',
              type: 'database',
              description: 'In-memory cache using HashMap data structure',
              technologies: ['HashMap', 'Java']
            },
            {
              name: 'Query Executor',
              type: 'service',
              description: 'Executes category-specific queries',
              technologies: ['Java', 'Spring Boot']
            }
          ],
          dataFlow: [
            {
              from: 'Query Fetcher',
              to: 'LLM Classifier',
              description: 'Sends normalized queries',
              data: '50K search queries'
            },
            {
              from: 'LLM Classifier',
              to: 'S3 Storage',
              description: 'Stores categorized queries',
              data: 'Query + Category mappings'
            },
            {
              from: 'S3 Storage',
              to: 'Cache Layer',
              description: 'Loads classifications',
              data: 'Category data'
            },
            {
              from: 'Cache Layer',
              to: 'Query Executor',
              description: 'Provides cached classifications',
              data: 'Classification results'
            }
          ]
        }
      },
      {
        title: 'Prefix-Based Search Query Autocomplete System',
        description: 'Built a sophisticated autocomplete system that generates suggestions from search-query prefixes, filters noisy/misspelled terms with LLM prompts, and uses Trie data structure with weighted relevance scoring.',
        technologies: ['Java', 'Spring Boot', 'Trie Data Structure', 'LLM', 'Amazon S3', 'Ranking Algorithm'],
        highlights: [
          'Generated autocomplete suggestions from query prefixes',
          'Filtered noisy and misspelled terms using LLM prompts',
          'Implemented Trie data structure for efficient prefix matching',
          'Developed weighted relevance scoring combining popularity and frequency',
          'Persisted filtered queries to Amazon S3',
          'Ranked suggestions by relevance score for optimal user experience'
        ],
        architecture: {
          components: [
            {
              name: 'Prefix Generator',
              type: 'service',
              description: 'Generates autocomplete suggestions from prefixes',
              technologies: ['Python', 'String Processing']
            },
            {
              name: 'LLM Filter',
              type: 'service',
              description: 'Filters noisy and misspelled terms',
              technologies: ['Python', 'LLM API']
            },
            {
              name: 'Trie Index',
              type: 'algorithm',
              description: 'Efficient prefix search data structure',
              technologies: ['Java', 'Spring Framework', 'Trie', 'In-Memory']
            },
            {
              name: 'Ranking Engine',
              type: 'algorithm',
              description: 'Weighted relevance scoring system',
              technologies: ['Python', 'Scoring Algorithm']
            },
            {
              name: 'S3 Storage',
              type: 'storage',
              description: 'Stores filtered queries and catalog',
              technologies: ['Amazon S3']
            }
          ],
          dataFlow: [
            {
              from: 'Prefix Generator',
              to: 'LLM Filter',
              description: 'Sends candidate suggestions',
              data: 'Autocomplete candidates'
            },
            {
              from: 'LLM Filter',
              to: 'S3 Storage',
              description: 'Persists filtered queries',
              data: 'Clean query terms'
            },
            {
              from: 'S3 Storage',
              to: 'Trie Index',
              description: 'Loads catalog and queries',
              data: 'Titles + Queries'
            },
            {
              from: 'Trie Index',
              to: 'Ranking Engine',
              description: 'Provides matched suggestions',
              data: 'Prefix matches'
            },
            {
              from: 'Ranking Engine',
              to: 'Frontend',
              description: 'Returns ranked suggestions',
              data: 'Top-K suggestions'
            }
          ]
        }
      }
    ]
  },
  {
    slug: 'innomatics-data-science-intern',
    company: 'Innomatics Research Labs',
    role: 'Data Science Intern',
    period: 'January 2024 - April 2024',
    location: 'Hyderabad, India',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    icon: '📊',
    projects: [
      {
        title: 'Product Review Sentiment Analysis System',
        description: 'Engineered a comprehensive system to analyze and classify over 8,500 product reviews, leveraging Prefect for ETL pipeline automation and scheduling. Trained multiple sentiment analysis models achieving F1-Score of 0.92.',
        technologies: ['Python', 'Prefect', 'BERT', 'TF-IDF', 'Word2Vec', 'MLflow', 'AWS'],
        highlights: [
          'Analyzed and classified 8,500+ product reviews',
          'Implemented Prefect for ETL pipeline automation and scheduling',
          'Trained models using BoW, TF-IDF, Word2Vec, and BERT',
          'Achieved F1-Score of 0.92 with BERT model',
          'Utilized MLflow for model management and experiment tracking',
          'Deployed sentiment analysis web application on AWS',
          'Enabled real-time customer feedback insights'
        ],
        architecture: {
          components: [
            {
              name: 'Data Ingestion',
              type: 'service',
              description: 'Fetches product reviews from multiple sources',
              technologies: ['Python', 'Prefect', 'APIs']
            },
            {
              name: 'ETL Pipeline',
              type: 'service',
              description: 'Automated data transformation and loading',
              technologies: ['Prefect', 'Python', 'Pandas']
            },
            {
              name: 'Feature Engineering',
              type: 'service',
              description: 'Creates features using BoW, TF-IDF, Word2Vec',
              technologies: ['Scikit-learn', 'NLTK']
            },
            {
              name: 'Model Training',
              type: 'service',
              description: 'Trains multiple sentiment models',
              technologies: ['BERT', 'Python']
            },
            {
              name: 'MLflow Tracker',
              type: 'service',
              description: 'Tracks experiments and model versions',
              technologies: ['MLflow', 'Python']
            },
            {
              name: 'Inference API',
              type: 'api',
              description: 'Real-time sentiment prediction',
              technologies: ['Flask', 'REST API']
            },
            {
              name: 'AWS Deployment',
              type: 'service',
              description: 'Cloud hosting and scaling using ECS cluster',
              technologies: ['AWS ECS']
            }
          ],
          dataFlow: [
            {
              from: 'Data Ingestion',
              to: 'ETL Pipeline',
              description: 'Raw review data',
              data: '8,500+ reviews'
            },
            {
              from: 'ETL Pipeline',
              to: 'Feature Engineering',
              description: 'Cleaned and preprocessed text',
              data: 'Processed reviews'
            },
            {
              from: 'Feature Engineering',
              to: 'Model Training',
              description: 'Feature vectors',
              data: 'BoW, TF-IDF, Word2Vec, BERT embeddings'
            },
            {
              from: 'Model Training',
              to: 'MLflow Tracker',
              description: 'Model metrics and artifacts',
              data: 'F1-Score: 0.92'
            },
            {
              from: 'Model Training',
              to: 'Inference API',
              description: 'Trained model',
              data: 'Best BERT model'
            },
            {
              from: 'Inference API',
              to: 'AWS Deployment',
              description: 'Deploy model to ECS cluster',
              data: 'Production model'
            }
          ]
        }
      },
      {
        title: 'Generative AI Code Review Application',
        description: 'Constructed a Generative AI-powered code review application using OpenAI API that reduces code review time by 40% with accurate bug detection and optimization suggestions.',
        technologies: ['Python', 'OpenAI API', 'Flask'],
        highlights: [
          'Reduced code review time by 40%',
          'Accurate bug detection and security vulnerability identification',
          'Optimization suggestions for performance improvements',
          'Multi-language support',
          'Real-time code analysis with immediate feedback',
          'Web-based interface for easy integration'
        ],
        architecture: {
          components: [
            {
              name: 'Code Parser',
              type: 'service',
              description: 'Parses and analyzes code structure',
              technologies: ['Python']
            },
            {
              name: 'OpenAI Integration',
              type: 'api',
              description: 'LLM-powered code analysis',
              technologies: ['OpenAI API', 'GPT-4', 'Prompt Engineering']
            },
            {
              name: 'Bug Detector',
              type: 'service',
              description: 'Identifies potential bugs and vulnerabilities',
              technologies: ['Python', 'Static Analysis']
            },
            {
              name: 'Optimization Engine',
              type: 'service',
              description: 'Suggests performance improvements',
              technologies: ['Python', 'Code Analysis']
            },
            {
              name: 'Review Generator',
              type: 'service',
              description: 'Generates human-readable review comments',
              technologies: ['Python', 'NLP']
            },
            {
              name: 'Web Interface',
              type: 'frontend',
              description: 'User interface for code submission',
              technologies: ['Flask']
            }
          ],
          dataFlow: [
            {
              from: 'Web Interface',
              to: 'Code Parser',
              description: 'Code submission',
              data: 'Source code files'
            },
            {
              from: 'Code Parser',
              to: 'OpenAI Integration',
              description: 'Parsed code structure',
              data: 'AST + Context'
            },
            {
              from: 'OpenAI Integration',
              to: 'Bug Detector',
              description: 'LLM analysis results',
              data: 'Potential issues'
            },
            {
              from: 'Bug Detector',
              to: 'Optimization Engine',
              description: 'Detected bugs',
              data: 'Bug list + severity'
            },
            {
              from: 'Optimization Engine',
              to: 'Review Generator',
              description: 'Optimization suggestions',
              data: 'Improvement recommendations'
            },
            {
              from: 'Review Generator',
              to: 'Web Interface',
              description: 'Complete review',
              data: 'Formatted feedback'
            }
          ]
        }
      }
    ]
  }
];

export const getInternshipBySlug = (slug: string): Internship | undefined => {
  return internships.find(i => i.slug === slug);
};
