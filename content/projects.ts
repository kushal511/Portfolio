export type Project = {
  slug: string;
  title: string;
  repo: string;
  summary: string;
  description: string;
  tags: string[];
  tech: string[];
  highlights: string[];
  images: { src: string; alt: string; gradient: string }[];
  readmeSection?: string;
  category: 'ai-ml' | 'systems' | 'web' | 'data';
  gradient: string;
  icon: string;
};

export const projects: Project[] = [
  {
    slug: 'finsight-copilot',
    title: 'FinSight Copilot',
    repo: 'https://github.com/kushal511/FinSight_Copilot',
    summary: 'AI-powered financial analysis copilot leveraging GenAI and LLMs for intelligent market insights and data-driven decision making.',
    description: 'FinSight Copilot is an advanced financial analysis platform that combines generative AI with real-time market data to provide intelligent insights. The system uses RAG (Retrieval-Augmented Generation) to analyze financial documents, market trends, and historical data, delivering actionable recommendations. Built with modern LLM architectures, it offers natural language querying of complex financial datasets, automated report generation, and predictive analytics for investment strategies.',
    tags: ['GenAI', 'LLM', 'RAG', 'FinTech', 'NLP', 'Machine Learning'],
    tech: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI', 'React'],
    highlights: [
      'Implemented RAG pipeline for financial document analysis with 92% accuracy',
      'Natural language interface for querying complex financial datasets',
      'Real-time market sentiment analysis using transformer models',
      'Automated financial report generation with customizable templates',
      'Integration with multiple financial data APIs for comprehensive analysis'
    ],
    images: [
      { src: '/projects/finsight-copilot/hero.jpg', alt: 'FinSight Copilot Dashboard', gradient: 'from-blue-500 to-purple-600' },
      { src: '/projects/finsight-copilot/analysis.jpg', alt: 'Financial Analysis View', gradient: 'from-green-500 to-blue-600' }
    ],
    gradient: 'from-blue-500 to-purple-600',
    icon: '🤖',
    category: 'ai-ml'
  },
  {
    slug: 'skinshade-ai',
    title: 'SkinShade AI',
    repo: 'https://github.com/kushal511/SkinShade-AI',
    summary: 'Computer vision system for accurate skin tone analysis and shade matching using deep learning and advanced image processing.',
    description: 'SkinShade AI is a sophisticated computer vision application that uses deep learning models to analyze and classify skin tones with high precision. The system employs custom CNN architectures trained on diverse datasets to ensure accurate shade detection across various lighting conditions. It provides real-time analysis, personalized recommendations, and integrates with e-commerce platforms for virtual try-on experiences. The model achieves state-of-the-art accuracy in skin tone classification while maintaining fairness across different demographics.',
    tags: ['Computer Vision', 'Deep Learning', 'CNN', 'Image Processing', 'ML'],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'NumPy', 'Scikit-learn'],
    highlights: [
      'Custom CNN architecture achieving 94% classification accuracy',
      'Real-time skin tone analysis with sub-second inference',
      'Robust performance across diverse lighting conditions',
      'Fairness-aware training to ensure demographic parity',
      'RESTful API for easy integration with e-commerce platforms'
    ],
    images: [
      { src: '/projects/skinshade-ai/hero.jpg', alt: 'SkinShade AI Interface', gradient: 'from-pink-500 to-orange-600' },
      { src: '/projects/skinshade-ai/analysis.jpg', alt: 'Tone Analysis Results', gradient: 'from-orange-500 to-red-600' }
    ],
    gradient: 'from-pink-500 to-orange-600',
    icon: '🎨',
    category: 'ai-ml'
  },
  {
    slug: 'uber-eats-lab2',
    title: 'Uber Eats System Design',
    repo: 'https://github.com/kushal511/Uber_eats_Lab2',
    summary: 'Comprehensive system design and implementation of a food delivery platform with microservices architecture and real-time order tracking.',
    description: 'A full-stack implementation of a food delivery platform inspired by Uber Eats, featuring microservices architecture, real-time order tracking, and intelligent routing algorithms. The system handles user authentication, restaurant management, order processing, and delivery logistics. Built with scalability in mind, it employs message queues for asynchronous processing, Redis for caching, and implements CQRS pattern for optimized read/write operations. The platform supports concurrent users, real-time updates via WebSockets, and includes comprehensive admin dashboards.',
    tags: ['System Design', 'Microservices', 'Full-Stack', 'Real-time', 'Distributed Systems'],
    tech: ['Node.js', 'React', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'AWS'],
    highlights: [
      'Microservices architecture with 8+ independent services',
      'Real-time order tracking using WebSocket connections',
      'Intelligent routing algorithm for optimal delivery assignments',
      'Horizontal scalability supporting 10,000+ concurrent users',
      'Comprehensive admin dashboard with analytics and reporting'
    ],
    images: [
      { src: '/projects/uber-eats-lab2/hero.jpg', alt: 'Uber Eats Platform', gradient: 'from-green-500 to-teal-600' },
      { src: '/projects/uber-eats-lab2/dashboard.jpg', alt: 'Admin Dashboard', gradient: 'from-teal-500 to-cyan-600' }
    ],
    gradient: 'from-green-500 to-teal-600',
    icon: '🍔',
    category: 'systems'
  },
  {
    slug: 'code-reviewer-ai',
    title: 'Generative AI Code Reviewer',
    repo: 'https://github.com/kushal511/Code_ReviewerApplication',
    summary: 'Intelligent code review assistant powered by LLMs that provides contextual feedback, security analysis, and best practice recommendations.',
    description: 'An advanced code review application that leverages large language models to provide intelligent, context-aware code analysis. The system performs static analysis, identifies potential bugs, security vulnerabilities, and code smells while suggesting improvements aligned with industry best practices. It supports multiple programming languages, integrates with popular version control systems, and provides detailed explanations for each suggestion. The application uses fine-tuned models trained on millions of code reviews to deliver human-quality feedback at scale.',
    tags: ['GenAI', 'LLM', 'Code Analysis', 'DevOps', 'NLP'],
    tech: ['Python', 'OpenAI GPT-4', 'FastAPI', 'React', 'GitHub API', 'PostgreSQL'],
    highlights: [
      'Multi-language support (Python, JavaScript, Java, Go, etc.)',
      'Security vulnerability detection with OWASP compliance',
      'Integration with GitHub, GitLab, and Bitbucket',
      'Contextual suggestions based on project-specific patterns',
      'Automated PR comments with actionable feedback'
    ],
    images: [
      { src: '/projects/code-reviewer-ai/hero.jpg', alt: 'Code Reviewer Interface', gradient: 'from-purple-500 to-indigo-600' },
      { src: '/projects/code-reviewer-ai/review.jpg', alt: 'Review Results', gradient: 'from-indigo-500 to-blue-600' }
    ],
    gradient: 'from-purple-500 to-indigo-600',
    icon: '🔍',
    category: 'ai-ml'
  },
  {
    slug: 'rag-system',
    title: 'RAG System',
    repo: 'https://github.com/kushal511/Rag_system',
    summary: 'Production-grade Retrieval-Augmented Generation system for building context-aware AI applications with custom knowledge bases.',
    description: 'A comprehensive RAG (Retrieval-Augmented Generation) system that combines vector search with large language models to create intelligent, context-aware applications. The system features advanced document processing, semantic chunking, and hybrid search capabilities. It supports multiple embedding models, implements re-ranking for improved relevance, and includes monitoring tools for tracking retrieval quality. The architecture is designed for production use with features like caching, rate limiting, and horizontal scalability. Perfect for building chatbots, question-answering systems, and knowledge management tools.',
    tags: ['RAG', 'LLM', 'Vector Search', 'NLP', 'GenAI', 'Information Retrieval'],
    tech: ['Python', 'LangChain', 'Pinecone', 'OpenAI', 'FastAPI', 'Redis'],
    highlights: [
      'Hybrid search combining dense and sparse retrieval',
      'Advanced document processing with semantic chunking',
      'Re-ranking pipeline for improved relevance (NDCG@10: 0.87)',
      'Support for multiple embedding models (OpenAI, Cohere, local)',
      'Production-ready with monitoring, caching, and rate limiting'
    ],
    images: [
      { src: '/projects/rag-system/hero.jpg', alt: 'RAG System Architecture', gradient: 'from-cyan-500 to-blue-600' },
      { src: '/projects/rag-system/interface.jpg', alt: 'Query Interface', gradient: 'from-blue-500 to-purple-600' }
    ],
    gradient: 'from-cyan-500 to-blue-600',
    icon: '📚',
    category: 'ai-ml'
  },
  {
    slug: 'book-recommendation-system',
    title: 'Book Recommendation System',
    repo: 'https://github.com/kushal511/Book_Recommendation_System',
    summary: 'Hybrid recommendation engine combining collaborative filtering, content-based methods, and deep learning for personalized book suggestions.',
    description: 'An advanced book recommendation system that employs multiple recommendation strategies to deliver highly personalized suggestions. The system combines collaborative filtering using matrix factorization, content-based filtering with NLP analysis of book descriptions, and deep learning models for capturing complex user-item interactions. It features cold-start handling for new users, real-time recommendations, and explainable AI components that provide reasoning for each suggestion. The platform includes A/B testing infrastructure and comprehensive evaluation metrics to continuously improve recommendation quality.',
    tags: ['Recommender Systems', 'Machine Learning', 'NLP', 'Deep Learning', 'Collaborative Filtering'],
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'PostgreSQL', 'Redis'],
    highlights: [
      'Hybrid approach combining 3 recommendation strategies',
      'Deep learning model with 91% precision@10',
      'Cold-start solution using content features and popularity',
      'Real-time recommendations with <100ms latency',
      'Explainable recommendations with reasoning for each suggestion'
    ],
    images: [
      { src: '/projects/book-recommendation-system/hero.jpg', alt: 'Recommendation Interface', gradient: 'from-amber-500 to-orange-600' },
      { src: '/projects/book-recommendation-system/results.jpg', alt: 'Recommendation Results', gradient: 'from-orange-500 to-red-600' }
    ],
    gradient: 'from-amber-500 to-orange-600',
    icon: '📖',
    category: 'ai-ml'
  },
  {
    slug: 'semantic-search-engine',
    title: 'Semantic Search Engine',
    repo: 'https://github.com/kushal511/Semantic_search_Engine',
    summary: 'Neural search engine using transformer-based embeddings for understanding query intent and delivering contextually relevant results.',
    description: 'A state-of-the-art semantic search engine that goes beyond keyword matching to understand the true intent behind queries. Built on transformer-based embedding models, it captures semantic relationships between queries and documents, enabling natural language search with high accuracy. The system features query expansion, typo tolerance, multi-lingual support, and faceted search capabilities. It employs approximate nearest neighbor search for sub-second retrieval even with millions of documents. The architecture includes a custom ranking model trained on click-through data to optimize result relevance.',
    tags: ['Semantic Search', 'NLP', 'Transformers', 'Vector Search', 'Information Retrieval'],
    tech: ['Python', 'Sentence-Transformers', 'Elasticsearch', 'FAISS', 'FastAPI', 'React'],
    highlights: [
      'Transformer-based embeddings for semantic understanding',
      'Sub-second search across 10M+ documents using FAISS',
      'Multi-lingual support for 50+ languages',
      'Custom ranking model trained on user behavior data',
      'Advanced features: query expansion, typo tolerance, faceted search'
    ],
    images: [
      { src: '/projects/semantic-search-engine/hero.jpg', alt: 'Search Interface', gradient: 'from-emerald-500 to-teal-600' },
      { src: '/projects/semantic-search-engine/results.jpg', alt: 'Search Results', gradient: 'from-teal-500 to-cyan-600' }
    ],
    gradient: 'from-emerald-500 to-teal-600',
    icon: '🔍',
    category: 'ai-ml'
  },
  {
    slug: 'data236-lab1',
    title: 'DATA236 Lab 1',
    repo: 'https://github.com/premshah06/DATA236_LAB1',
    summary: 'Advanced data engineering project implementing ETL pipelines, data warehousing, and analytics on large-scale datasets.',
    description: 'A comprehensive data engineering project focused on building scalable ETL pipelines and data warehousing solutions. The project demonstrates proficiency in handling large-scale data processing, implementing dimensional modeling, and creating efficient data transformation workflows. It includes batch and streaming data processing, data quality validation, and automated pipeline orchestration. The solution employs modern data stack tools and follows best practices for data governance, lineage tracking, and performance optimization. Includes detailed analytics dashboards and reporting capabilities.',
    tags: ['Data Engineering', 'ETL', 'Data Warehousing', 'Big Data', 'Analytics'],
    tech: ['Python', 'Apache Spark', 'Airflow', 'PostgreSQL', 'dbt', 'Tableau'],
    highlights: [
      'Scalable ETL pipelines processing 100GB+ daily',
      'Dimensional data warehouse with star schema design',
      'Automated data quality checks and anomaly detection',
      'Real-time streaming pipeline using Kafka and Spark Streaming',
      'Interactive dashboards with sub-second query performance'
    ],
    images: [
      { src: '/projects/data236-lab1/hero.jpg', alt: 'Data Pipeline Architecture', gradient: 'from-violet-500 to-purple-600' },
      { src: '/projects/data236-lab1/dashboard.jpg', alt: 'Analytics Dashboard', gradient: 'from-purple-500 to-pink-600' }
    ],
    gradient: 'from-violet-500 to-purple-600',
    icon: '📊',
    category: 'data'
  },
  {
    slug: 'uber-simulation-system',
    title: 'Uber Simulation System',
    repo: 'https://github.com/bencejdanko/uber-simulation-system',
    summary: 'Agent-based simulation system modeling ride-sharing dynamics, demand patterns, and optimization strategies at city scale.',
    description: 'A sophisticated agent-based simulation platform that models the complex dynamics of ride-sharing systems. The simulation incorporates realistic driver behavior, passenger demand patterns, traffic conditions, and pricing strategies. It enables testing of various optimization algorithms for driver-passenger matching, surge pricing, and fleet management. The system features a visual interface for real-time monitoring, comprehensive analytics, and scenario comparison tools. Built with performance in mind, it can simulate thousands of concurrent agents while maintaining real-time responsiveness. Useful for research, strategy planning, and algorithm validation.',
    tags: ['Simulation', 'Agent-Based Modeling', 'Optimization', 'Distributed Systems', 'Algorithms'],
    tech: ['Python', 'SimPy', 'NetworkX', 'Dash', 'PostgreSQL', 'Docker'],
    highlights: [
      'Simulates 10,000+ concurrent agents in real-time',
      'Realistic traffic modeling using real-world road networks',
      'Multiple optimization strategies for driver-passenger matching',
      'Interactive visualization with real-time metrics',
      'Scenario comparison and A/B testing capabilities'
    ],
    images: [
      { src: '/projects/uber-simulation-system/hero.jpg', alt: 'Simulation Interface', gradient: 'from-slate-500 to-gray-600' },
      { src: '/projects/uber-simulation-system/visualization.jpg', alt: 'City Simulation View', gradient: 'from-gray-500 to-zinc-600' }
    ],
    gradient: 'from-slate-500 to-gray-600',
    icon: '🚗',
    category: 'systems'
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(p => p.category === category);
};

export const getAllCategories = (): Project['category'][] => {
  return ['ai-ml', 'systems', 'web', 'data'];
};
