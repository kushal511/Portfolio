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
  gradient: string;
  icon: string;
  architecture: {
    components: Component[];
    dataFlow: DataFlow[];
  };
};

export const projects: Project[] = [
  {
    slug: 'finsight-copilot',
    title: 'FinSight Copilot',
    repo: 'https://github.com/kushal511/FinSight_Copilot',
    summary: 'AI-powered financial analysis copilot leveraging GenAI and LLMs for intelligent market insights and data-driven decision making.',
    description: 'Built an advanced financial analysis platform that combines generative AI with real-time market data to provide intelligent insights. The system uses RAG (Retrieval-Augmented Generation) to analyze financial documents, market trends, and historical data, delivering actionable recommendations. Implemented with modern LLM architectures, it offers natural language querying of complex financial datasets, automated report generation, and predictive analytics for investment strategies. The platform integrates multiple financial data APIs and uses vector databases for efficient document retrieval and analysis.',
    tags: ['GenAI', 'LLM', 'RAG', 'FinTech', 'NLP', 'Machine Learning', 'Financial Analysis'],
    tech: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI', 'React', 'Financial APIs', 'ChromaDB'],
    highlights: [
      'RAG pipeline for financial document analysis with high accuracy retrieval',
      'Natural language interface for querying complex financial datasets',
      'Real-time market sentiment analysis using transformer models',
      'Automated financial report generation with customizable templates',
      'Integration with multiple financial data APIs for comprehensive analysis',
      'Vector database implementation for efficient document storage and retrieval',
      'Predictive analytics for investment strategies and market forecasting',
      'Interactive dashboard for visualizing financial insights and trends'
    ],
    images: [
      { src: '/projects/finsight-copilot/hero.jpg', alt: 'FinSight Copilot Dashboard', gradient: 'from-blue-500 to-purple-600' },
      { src: '/projects/finsight-copilot/analysis.jpg', alt: 'Financial Analysis View', gradient: 'from-green-500 to-blue-600' }
    ],
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    icon: '💰',
    architecture: {
      components: [
        {
          name: 'Data Ingestion',
          type: 'service',
          description: 'Financial data collection from multiple APIs',
          technologies: ['Python', 'Financial APIs', 'Data Processing']
        },
        {
          name: 'Document Processor',
          type: 'service',
          description: 'PDF and document analysis for financial reports',
          technologies: ['LangChain', 'PyPDF', 'Text Processing']
        },
        {
          name: 'Vector Database',
          type: 'storage',
          description: 'ChromaDB for storing document embeddings',
          technologies: ['ChromaDB', 'Vector Embeddings']
        },
        {
          name: 'LLM Engine',
          type: 'model',
          description: 'OpenAI GPT for analysis and generation',
          technologies: ['OpenAI API', 'GPT-4', 'LangChain']
        },
        {
          name: 'RAG Pipeline',
          type: 'service',
          description: 'Retrieval-Augmented Generation system',
          technologies: ['LangChain', 'Vector Search', 'Context Retrieval']
        },
        {
          name: 'Analytics Engine',
          type: 'service',
          description: 'Market sentiment and predictive analytics',
          technologies: ['Python', 'Machine Learning', 'NLP']
        },
        {
          name: 'API Gateway',
          type: 'api',
          description: 'FastAPI backend for frontend integration',
          technologies: ['FastAPI', 'Python', 'REST API']
        },
        {
          name: 'Frontend Dashboard',
          type: 'frontend',
          description: 'React-based interactive dashboard',
          technologies: ['React', 'JavaScript', 'Data Visualization']
        }
      ],
      dataFlow: [
        {
          from: 'Data Ingestion',
          to: 'Document Processor',
          description: 'Collect financial data and reports',
          data: 'Raw financial data'
        },
        {
          from: 'Document Processor',
          to: 'Vector Database',
          description: 'Process and embed documents',
          data: 'Document embeddings'
        },
        {
          from: 'Frontend Dashboard',
          to: 'API Gateway',
          description: 'User queries and requests',
          data: 'Natural language queries'
        },
        {
          from: 'API Gateway',
          to: 'RAG Pipeline',
          description: 'Process user queries',
          data: 'Query processing'
        },
        {
          from: 'RAG Pipeline',
          to: 'Vector Database',
          description: 'Retrieve relevant context',
          data: 'Context retrieval'
        },
        {
          from: 'RAG Pipeline',
          to: 'LLM Engine',
          description: 'Generate insights with context',
          data: 'Contextual prompts'
        },
        {
          from: 'LLM Engine',
          to: 'Analytics Engine',
          description: 'Enhanced analysis results',
          data: 'AI-generated insights'
        },
        {
          from: 'Analytics Engine',
          to: 'Frontend Dashboard',
          description: 'Deliver financial insights',
          data: 'Actionable recommendations'
        }
      ]
    }
  },
  {
    slug: 'skinshade-ai',
    title: 'SkinShade AI',
    repo: 'https://github.com/kushal511/SkinShade-AI',
    summary: 'Computer vision system for accurate skin tone analysis and shade matching using deep learning and advanced image processing.',
    description: 'Built a comprehensive skin-tone classification and color recommendation system using MTCNN for face detection, HSV-based skin segmentation, and K-Means clustering to extract dominant skin colors. The system categorizes skin tones into Light, Medium, and Dark categories, utilizing the CelebA dataset during development. Deployed with TensorFlow Lite and an intuitive Gradio UI, the application combines OpenCV image processing, scikit-learn K-Means clustering to find dominant skin colors, and PyTorch MTCNN for accurate face detection. The system generates personalized 5-color palettes tailored to individual skin tones, promoting fairness in computer vision models.',
    tags: ['Computer Vision', 'Deep Learning', 'Image Processing', 'ML', 'Fairness AI', 'K-Means Clustering'],
    tech: ['Python', 'TensorFlow Lite', 'PyTorch', 'MTCNN', 'OpenCV', 'scikit-learn', 'Gradio', 'NumPy', 'HSV Color Space'],
    highlights: [
      'MTCNN-based face detection with HSV color space segmentation for accurate skin region identification',
      'K-Means clustering algorithm to extract dominant skin colors from detected facial regions',
      'Three-tier classification system categorizing skin tones into Light, Medium, and Dark categories',
      'Leveraged CelebA dataset for model development and validation across diverse demographics',
      'TensorFlow Lite deployment for optimized inference on mobile and edge devices',
      'Interactive Gradio UI providing real-time skin tone analysis and color palette generation',
      'Personalized 5-color palette recommendations tailored to individual skin tones',
      'Promotes fairness in computer vision by ensuring equitable performance across all skin tones'
    ],
    images: [
      { src: '/projects/skinshade-ai/hero.jpg', alt: 'SkinShade AI Interface', gradient: 'from-rose-500 to-pink-600' },
      { src: '/projects/skinshade-ai/analysis.jpg', alt: 'Tone Analysis Results', gradient: 'from-purple-500 to-pink-600' }
    ],
    gradient: 'from-rose-400 via-pink-500 to-purple-600',
    icon: '🎨',
    architecture: {
      components: [
        {
          name: 'Image Input Module',
          type: 'frontend',
          description: 'Gradio interface for image upload and preprocessing',
          technologies: ['Gradio', 'Python']
        },
        {
          name: 'Face Detection Engine',
          type: 'model',
          description: 'MTCNN model for accurate face detection',
          technologies: ['PyTorch', 'MTCNN']
        },
        {
          name: 'Skin Segmentation',
          type: 'algorithm',
          description: 'HSV-based color space segmentation to isolate skin regions',
          technologies: ['OpenCV', 'HSV', 'NumPy']
        },
        {
          name: 'Color Extraction',
          type: 'algorithm',
          description: 'K-Means clustering to find dominant skin colors',
          technologies: ['scikit-learn', 'K-Means', 'NumPy']
        },
        {
          name: 'Tone Classifier',
          type: 'model',
          description: 'Classifies skin tone into Light/Medium/Dark categories',
          technologies: ['TensorFlow Lite', 'CelebA Dataset']
        },
        {
          name: 'Palette Generator',
          type: 'service',
          description: 'Generates personalized 5-color palettes',
          technologies: ['Python', 'Color Theory']
        }
      ],
      dataFlow: [
        {
          from: 'Image Input Module',
          to: 'Face Detection Engine',
          description: 'Uploads and preprocesses user image',
          data: 'Raw image data'
        },
        {
          from: 'Face Detection Engine',
          to: 'Skin Segmentation',
          description: 'Detects face regions in image',
          data: 'Face bounding boxes'
        },
        {
          from: 'Skin Segmentation',
          to: 'Color Extraction',
          description: 'Segments skin regions using HSV color space',
          data: 'Skin pixel masks'
        },
        {
          from: 'Color Extraction',
          to: 'Tone Classifier',
          description: 'Extracts dominant colors using K-Means',
          data: 'Dominant color values'
        },
        {
          from: 'Tone Classifier',
          to: 'Palette Generator',
          description: 'Classifies into Light/Medium/Dark',
          data: 'Tone category'
        },
        {
          from: 'Palette Generator',
          to: 'Image Input Module',
          description: 'Generates personalized color palette',
          data: '5-color palette recommendations'
        }
      ]
    }
  },
  {
    slug: 'semantic-search-engine',
    title: 'Semantic Search Engine',
    repo: 'https://github.com/kushal511/Semantic_search_Engine',
    summary: 'Neural search engine using transformer-based embeddings for understanding query intent and delivering contextually relevant results.',
    description: 'Spearheaded the development of a semantic search engine using BERT-based SentenceTransformers to vectorize movie subtitles and user queries, improving retrieval accuracy for 30,000 subtitles. Applied comprehensive data preprocessing and document chunking techniques to optimize search performance. Used cosine similarity for more accurate matches between query vectors and document embeddings. Managed ChromaDB embeddings to speed up data retrieval and enable efficient similarity search. The system transforms traditional keyword-based search into semantic understanding, allowing users to find relevant content even when exact keywords don\'t match.',
    tags: ['Semantic Search', 'NLP', 'Transformers', 'Vector Search', 'BERT', 'Embeddings'],
    tech: ['Python', 'BERT', 'SentenceTransformers', 'ChromaDB', 'Cosine Similarity', 'NLP'],
    highlights: [
      'BERT-based SentenceTransformers for vectorizing movie subtitles and user queries',
      'Improved retrieval accuracy for 30,000 subtitles using semantic understanding',
      'Comprehensive data preprocessing and document chunking for optimized search performance',
      'Cosine similarity for accurate matches between query vectors and document embeddings',
      'ChromaDB embeddings management for fast data retrieval and efficient similarity search',
      'Transforms keyword-based search into semantic understanding for better relevance',
      'Finds relevant content even when exact keywords don\'t match',
      'Practical application of transformer models and vector databases in search systems'
    ],
    images: [
      { src: '/projects/semantic-search-engine/hero.jpg', alt: 'Search Interface', gradient: 'from-violet-500 to-purple-600' },
      { src: '/projects/semantic-search-engine/results.jpg', alt: 'Search Results', gradient: 'from-purple-500 to-fuchsia-600' }
    ],
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
    icon: '🔎',
    architecture: {
      components: [
        {
          name: 'Query Input Interface',
          type: 'frontend',
          description: 'User interface for search queries',
          technologies: ['Python', 'Web Interface']
        },
        {
          name: 'Document Processor',
          type: 'service',
          description: 'Preprocesses and chunks 30K subtitles',
          technologies: ['Python', 'NLP', 'Text Processing']
        },
        {
          name: 'BERT Embedder',
          type: 'model',
          description: 'SentenceTransformers for vectorization',
          technologies: ['BERT', 'SentenceTransformers', 'PyTorch']
        },
        {
          name: 'Vector Database',
          type: 'storage',
          description: 'ChromaDB for storing embeddings',
          technologies: ['ChromaDB', 'Vector Storage']
        },
        {
          name: 'Similarity Calculator',
          type: 'algorithm',
          description: 'Cosine similarity for matching',
          technologies: ['NumPy', 'Cosine Similarity']
        },
        {
          name: 'Results Ranker',
          type: 'service',
          description: 'Ranks and returns top results',
          technologies: ['Python', 'Ranking Algorithm']
        }
      ],
      dataFlow: [
        {
          from: 'Document Processor',
          to: 'BERT Embedder',
          description: 'Preprocessed subtitle chunks',
          data: '30K processed documents'
        },
        {
          from: 'BERT Embedder',
          to: 'Vector Database',
          description: 'Generate and store embeddings',
          data: 'Vector embeddings'
        },
        {
          from: 'Query Input Interface',
          to: 'BERT Embedder',
          description: 'User search query',
          data: 'Query text'
        },
        {
          from: 'BERT Embedder',
          to: 'Similarity Calculator',
          description: 'Query embedding',
          data: 'Query vector'
        },
        {
          from: 'Vector Database',
          to: 'Similarity Calculator',
          description: 'Retrieve stored embeddings',
          data: 'Document vectors'
        },
        {
          from: 'Similarity Calculator',
          to: 'Results Ranker',
          description: 'Calculate cosine similarity scores',
          data: 'Similarity scores'
        },
        {
          from: 'Results Ranker',
          to: 'Query Input Interface',
          description: 'Return ranked results',
          data: 'Top matching subtitles'
        }
      ]
    }
  },
  {
    slug: 'rag-system',
    title: 'RAG System on "Leave No Context Behind" Research Paper',
    repo: 'https://github.com/kushal511/Rag_system',
    summary: 'Production-grade Retrieval-Augmented Generation system for building context-aware AI applications with custom knowledge bases.',
    description: 'Designed a Retrieval-Augmented Generation (RAG) system specifically for the "Leave No Context Behind" research paper using LangChain and Google Gemini 1.5 Pro. The system processes documents using PyPDFLoader, chunks them into manageable segments, generates embeddings, and stores them in ChromaDB for efficient retrieval. Enhanced Large Language Model performance by integrating external data sources to improve context-awareness and generate more accurate, contextually relevant responses. The RAG architecture combines information retrieval with generative AI, allowing the model to access and utilize specific document content when generating responses.',
    tags: ['RAG', 'LLM', 'GenAI', 'Information Retrieval', 'Embeddings', 'Document Processing'],
    tech: ['Python', 'LangChain', 'Google Gemini 1.5 Pro', 'ChromaDB', 'PyPDFLoader', 'Vector Embeddings'],
    highlights: [
      'LangChain framework integration for building the RAG pipeline',
      'Google Gemini 1.5 Pro as the large language model for response generation',
      'PyPDFLoader for efficient document processing and text extraction',
      'Document chunking strategy to break down large documents into manageable segments',
      'Vector embeddings generation for semantic search capabilities',
      'ChromaDB vector database for efficient storage and retrieval of embeddings',
      'Enhanced context-awareness by integrating external research paper data',
      'Improved response accuracy and relevance through retrieval-augmented generation',
      'Semantic search to find relevant document chunks based on user queries'
    ],
    images: [
      { src: '/projects/rag-system/hero.jpg', alt: 'RAG System Architecture', gradient: 'from-cyan-500 to-blue-600' },
      { src: '/projects/rag-system/interface.jpg', alt: 'Query Interface', gradient: 'from-blue-500 to-indigo-600' }
    ],
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    icon: '🧠',
    architecture: {
      components: [
        {
          name: 'PDF Loader',
          type: 'service',
          description: 'PyPDFLoader for document ingestion',
          technologies: ['PyPDFLoader', 'Python']
        },
        {
          name: 'Document Chunker',
          type: 'service',
          description: 'Splits documents into manageable segments',
          technologies: ['LangChain', 'Text Splitter']
        },
        {
          name: 'Embedding Generator',
          type: 'model',
          description: 'Creates vector embeddings for chunks',
          technologies: ['LangChain', 'Embeddings API']
        },
        {
          name: 'Vector Store',
          type: 'storage',
          description: 'ChromaDB for storing and indexing embeddings',
          technologies: ['ChromaDB', 'Vector Database']
        },
        {
          name: 'Retriever',
          type: 'service',
          description: 'Semantic search over document chunks',
          technologies: ['LangChain', 'Similarity Search']
        },
        {
          name: 'LLM',
          type: 'model',
          description: 'Google Gemini 1.5 Pro for generation',
          technologies: ['Google Gemini 1.5 Pro', 'LangChain']
        },
        {
          name: 'Response Generator',
          type: 'service',
          description: 'Combines retrieval with generation',
          technologies: ['LangChain', 'RAG Chain']
        }
      ],
      dataFlow: [
        {
          from: 'PDF Loader',
          to: 'Document Chunker',
          description: 'Load research paper PDF',
          data: 'Raw PDF text'
        },
        {
          from: 'Document Chunker',
          to: 'Embedding Generator',
          description: 'Split into chunks',
          data: 'Document segments'
        },
        {
          from: 'Embedding Generator',
          to: 'Vector Store',
          description: 'Generate and store embeddings',
          data: 'Vector embeddings'
        },
        {
          from: 'Response Generator',
          to: 'Retriever',
          description: 'User query',
          data: 'Question about paper'
        },
        {
          from: 'Retriever',
          to: 'Vector Store',
          description: 'Search for relevant chunks',
          data: 'Query embedding'
        },
        {
          from: 'Vector Store',
          to: 'Retriever',
          description: 'Return matching chunks',
          data: 'Relevant context'
        },
        {
          from: 'Retriever',
          to: 'LLM',
          description: 'Provide context',
          data: 'Retrieved chunks'
        },
        {
          from: 'LLM',
          to: 'Response Generator',
          description: 'Generate answer',
          data: 'Context-aware response'
        }
      ]
    }
  },
  {
    slug: 'code-reviewer-ai',
    title: 'Generative AI Code Review Application',
    repo: 'https://github.com/kushal511/Code_ReviewerApplication',
    summary: 'Intelligent code review assistant powered by LLMs that provides contextual feedback, security analysis, and best practice recommendations.',
    description: 'Constructed a Generative AI-powered code review application using the OpenAI API that significantly reduces code review time by 40% while providing accurate bug detection and optimization suggestions. The system analyzes code submissions, identifies potential bugs, security vulnerabilities, and performance issues, and provides detailed suggestions for improvement. Leverages large language models to understand code context and provide human-like review comments. The application supports multiple programming languages and integrates seamlessly into development workflows.',
    tags: ['GenAI', 'LLM', 'Code Analysis', 'OpenAI', 'Automation', 'Bug Detection'],
    tech: ['Python', 'OpenAI API', 'Flask', 'NLP', 'Git'],
    highlights: [
      'OpenAI API integration for intelligent code analysis and review generation',
      'Reduces code review time by 40% through automated analysis and suggestions',
      'Accurate bug detection identifying potential issues before deployment',
      'Provides optimization suggestions for performance improvements',
      'Multi-language support for various programming languages',
      'Detailed explanations for each suggestion helping developers learn best practices',
      'Real-time code analysis with immediate feedback',
      'Web-based interface for easy access and integration into development workflows'
    ],
    images: [
      { src: '/projects/code-reviewer-ai/hero.jpg', alt: 'Code Reviewer Interface', gradient: 'from-indigo-500 to-purple-600' },
      { src: '/projects/code-reviewer-ai/review.jpg', alt: 'Review Results', gradient: 'from-violet-500 to-purple-600' }
    ],
    gradient: 'from-indigo-400 via-purple-500 to-pink-600',
    icon: '🔍',
    architecture: {
      components: [
        {
          name: 'Web Interface',
          type: 'frontend',
          description: 'Flask-based UI for code submission',
          technologies: ['Flask', 'HTML', 'JavaScript']
        },
        {
          name: 'Code Parser',
          type: 'service',
          description: 'Analyzes code structure and syntax',
          technologies: ['Python', 'AST', 'Static Analysis']
        },
        {
          name: 'OpenAI Integration',
          type: 'api',
          description: 'GPT-4 for intelligent code analysis',
          technologies: ['OpenAI API', 'GPT-4']
        },
        {
          name: 'Bug Detector',
          type: 'service',
          description: 'Identifies bugs and vulnerabilities',
          technologies: ['Python', 'Pattern Matching']
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
          description: 'Generates human-readable feedback',
          technologies: ['Python', 'NLP', 'Formatting']
        }
      ],
      dataFlow: [
        {
          from: 'Web Interface',
          to: 'Code Parser',
          description: 'Submit code for review',
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
          description: 'AI analysis results',
          data: 'Potential issues'
        },
        {
          from: 'Bug Detector',
          to: 'Optimization Engine',
          description: 'Identified bugs',
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
          data: 'Formatted feedback (40% faster)'
        }
      ]
    }
  },
  {
    slug: 'uber-eats-platform',
    title: 'Distributed Food Delivery Platform',
    repo: 'https://github.com/kushal511/Uber_eats_Lab2',
    summary: 'Comprehensive full-stack food delivery platform with microservices architecture, real-time order tracking, and cloud deployment.',
    description: 'Built a comprehensive full-stack food delivery system featuring a ReactJS frontend and Node.js/Express backend with MongoDB database. The platform includes secure authentication, dedicated customer and restaurant dashboards, complete order management system, and well-documented REST APIs in Postman. Enhanced scalability by containerizing all services with Docker and orchestrating them with Kubernetes for automated deployment and scaling. Integrated Apache Kafka for asynchronous order processing, enabling reliable message queuing and event-driven architecture. Deployed the entire application on AWS cloud infrastructure for high availability. Implemented Redux for efficient application state management across the frontend. Validated system performance and scalability using Apache JMeter load testing.',
    tags: ['Full-Stack', 'Microservices', 'Distributed Systems', 'Event-Driven', 'Cloud Deployment'],
    tech: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Docker', 'Kubernetes', 'Apache Kafka', 'AWS', 'Postman', 'JMeter'],
    highlights: [
      'Full-stack architecture with ReactJS frontend and Node.js/Express backend using MongoDB',
      'Secure authentication system with dedicated customer and restaurant dashboards',
      'Complete order management system handling the entire order lifecycle',
      'REST APIs documented comprehensively in Postman for easy integration',
      'Docker containerization of all services for consistent deployment across environments',
      'Kubernetes orchestration for automated scaling and high availability',
      'Apache Kafka integration for asynchronous order processing and event-driven architecture',
      'Redux state management for efficient data flow across the application',
      'AWS cloud deployment ensuring scalability and reliability',
      'Apache JMeter load testing validating performance under high traffic'
    ],
    images: [
      { src: '/projects/uber-eats-platform/hero.jpg', alt: 'Food Delivery Platform', gradient: 'from-green-500 to-emerald-600' },
      { src: '/projects/uber-eats-platform/dashboard.jpg', alt: 'Admin Dashboard', gradient: 'from-blue-500 to-indigo-600' }
    ],
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    icon: '🍔',
    architecture: {
      components: [
        {
          name: 'React Frontend',
          type: 'frontend',
          description: 'ReactJS with Redux state management',
          technologies: ['ReactJS', 'Redux', 'JavaScript']
        },
        {
          name: 'API Gateway',
          type: 'api',
          description: 'Express.js REST API gateway',
          technologies: ['Express.js', 'Node.js']
        },
        {
          name: 'Auth Service',
          type: 'service',
          description: 'JWT-based authentication',
          technologies: ['Node.js', 'JWT', 'bcrypt']
        },
        {
          name: 'Order Service',
          type: 'service',
          description: 'Order management microservice',
          technologies: ['Node.js', 'Express.js']
        },
        {
          name: 'Restaurant Service',
          type: 'service',
          description: 'Restaurant management microservice',
          technologies: ['Node.js', 'Express.js']
        },
        {
          name: 'Message Queue',
          type: 'storage',
          description: 'Apache Kafka for async processing',
          technologies: ['Apache Kafka', 'Event Streaming']
        },
        {
          name: 'MongoDB',
          type: 'database',
          description: 'NoSQL database for data persistence',
          technologies: ['MongoDB', 'Mongoose']
        },
        {
          name: 'Docker Containers',
          type: 'service',
          description: 'Containerization of all services',
          technologies: ['Docker', 'Docker Compose']
        },
        {
          name: 'Kubernetes',
          type: 'service',
          description: 'Container orchestration and scaling',
          technologies: ['Kubernetes', 'K8s']
        },
        {
          name: 'AWS Cloud',
          type: 'service',
          description: 'Cloud hosting and deployment',
          technologies: ['AWS', 'EC2', 'S3']
        }
      ],
      dataFlow: [
        {
          from: 'React Frontend',
          to: 'API Gateway',
          description: 'User actions and requests',
          data: 'HTTP requests'
        },
        {
          from: 'API Gateway',
          to: 'Auth Service',
          description: 'Authentication requests',
          data: 'Login/signup data'
        },
        {
          from: 'Auth Service',
          to: 'API Gateway',
          description: 'JWT tokens',
          data: 'Auth tokens'
        },
        {
          from: 'API Gateway',
          to: 'Order Service',
          description: 'Order operations',
          data: 'Order data'
        },
        {
          from: 'Order Service',
          to: 'Message Queue',
          description: 'Async order events',
          data: 'Order events'
        },
        {
          from: 'Message Queue',
          to: 'Restaurant Service',
          description: 'Order notifications',
          data: 'Event messages'
        },
        {
          from: 'Restaurant Service',
          to: 'MongoDB',
          description: 'Data persistence',
          data: 'Restaurant/order data'
        },
        {
          from: 'MongoDB',
          to: 'Order Service',
          description: 'Data retrieval',
          data: 'Stored data'
        },
        {
          from: 'Order Service',
          to: 'React Frontend',
          description: 'Updated order status',
          data: 'Real-time updates'
        }
      ]
    }
  },
  {
    slug: 'intelligent-transportation',
    title: 'Intelligent Transportation System',
    repo: 'https://github.com/bencejdanko/uber-simulation-system',
    summary: '3-tier distributed ride-sharing system with dynamic pricing, machine learning, and comprehensive load testing.',
    description: 'Developed a 3-tier distributed system with modules for drivers, customers, billing, admin, and rides, using Node.js, Express, REST APIs, and MongoDB. The system is deployed via Docker for consistent deployment across environments. Implemented a dynamic pricing algorithm using the Uber Fares Kaggle dataset with machine learning models to balance supply-demand dynamics. The intelligent pricing strategy adjusts fares in real-time based on demand patterns, driver availability, and market conditions. Validated scalability with Apache JMeter load testing on 10k+ drivers, customers, and billing records, ensuring the system can handle high traffic loads. The modular architecture enables independent scaling of system components, with REST APIs facilitating seamless communication between distributed modules.',
    tags: ['Distributed Systems', 'Machine Learning', 'Dynamic Pricing', 'REST APIs', 'Load Testing'],
    tech: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Docker', 'Apache JMeter', 'Machine Learning', 'Kaggle Dataset'],
    highlights: [
      '3-tier distributed system with modules for drivers, customers, billing, admin, and rides',
      'Built with Node.js, Express, REST APIs, and MongoDB for scalable architecture',
      'Deployed via Docker for consistent deployment across environments',
      'Dynamic pricing algorithm using Uber Fares Kaggle dataset with machine learning models',
      'Balances supply-demand through intelligent pricing strategies',
      'Apache JMeter load testing validating scalability with 10k+ drivers, customers, and billing records',
      'Modular architecture enabling independent scaling of system components',
      'REST APIs for seamless communication between distributed modules'
    ],
    images: [
      { src: '/projects/intelligent-transportation/hero.jpg', alt: 'Transportation System', gradient: 'from-slate-500 to-gray-600' },
      { src: '/projects/intelligent-transportation/dashboard.jpg', alt: 'System Dashboard', gradient: 'from-gray-500 to-zinc-600' }
    ],
    gradient: 'from-slate-400 via-gray-500 to-zinc-600',
    icon: '🚗',
    architecture: {
      components: [
        {
          name: 'Driver Module',
          type: 'service',
          description: 'Driver management and availability',
          technologies: ['Node.js', 'Express', 'REST API']
        },
        {
          name: 'Customer Module',
          type: 'service',
          description: 'Customer requests and ride booking',
          technologies: ['Node.js', 'Express', 'REST API']
        },
        {
          name: 'Billing Module',
          type: 'service',
          description: 'Payment processing and invoicing',
          technologies: ['Node.js', 'Express', 'REST API']
        },
        {
          name: 'Admin Module',
          type: 'service',
          description: 'System administration and monitoring',
          technologies: ['Node.js', 'Express', 'Dashboard']
        },
        {
          name: 'Ride Module',
          type: 'service',
          description: 'Ride matching and tracking',
          technologies: ['Node.js', 'Express', 'REST API']
        },
        {
          name: 'Pricing Algorithm',
          type: 'algorithm',
          description: 'ML-based dynamic pricing engine',
          technologies: ['Python', 'Machine Learning', 'Kaggle Dataset']
        },
        {
          name: 'MongoDB',
          type: 'database',
          description: 'NoSQL database for all modules',
          technologies: ['MongoDB', 'Mongoose']
        },
        {
          name: 'Docker',
          type: 'service',
          description: 'Containerization for deployment',
          technologies: ['Docker', 'Docker Compose']
        },
        {
          name: 'Load Tester',
          type: 'service',
          description: 'Apache JMeter for scalability testing',
          technologies: ['Apache JMeter', 'Performance Testing']
        }
      ],
      dataFlow: [
        {
          from: 'Customer Module',
          to: 'Ride Module',
          description: 'Customer ride request',
          data: 'Ride details (pickup, destination)'
        },
        {
          from: 'Ride Module',
          to: 'Driver Module',
          description: 'Find available drivers',
          data: 'Driver availability query'
        },
        {
          from: 'Driver Module',
          to: 'Pricing Algorithm',
          description: 'Current supply data',
          data: 'Available drivers count'
        },
        {
          from: 'Customer Module',
          to: 'Pricing Algorithm',
          description: 'Current demand data',
          data: 'Active ride requests'
        },
        {
          from: 'Pricing Algorithm',
          to: 'Billing Module',
          description: 'Calculate dynamic fare',
          data: 'Fare amount (ML-based)'
        },
        {
          from: 'Billing Module',
          to: 'MongoDB',
          description: 'Store billing record',
          data: 'Invoice data'
        },
        {
          from: 'Ride Module',
          to: 'MongoDB',
          description: 'Store ride details',
          data: 'Ride record'
        },
        {
          from: 'MongoDB',
          to: 'Admin Module',
          description: 'System metrics',
          data: '10k+ records for monitoring'
        }
      ]
    }
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 6);
};

export const searchProjects = (query: string): Project[] => {
  const lowerQuery = query.toLowerCase();
  return projects.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.summary.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    p.tech.some(tech => tech.toLowerCase().includes(lowerQuery))
  );
};
