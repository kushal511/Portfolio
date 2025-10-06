# Kushal Adhyaru - Elite Portfolio

## 🎯 Overview

Production-quality portfolio website with **extremely advanced UI**, featuring 6 impactful projects and detailed internship experiences with component diagrams.

## 📊 Portfolio Structure

### **Internship Experiences (with Component Diagrams)**

#### 1. **Amazon - Software Development Engineer Intern** (May 2025 - August 2025)
   - **Project 1: End-to-End Search Query Classification System**
     - Processed 50,000+ search queries
     - LLM-powered categorization
     - Amazon S3 storage
     - Component Diagram: 5 components with data flow visualization
   
   - **Project 2: Prefix-Based Search Query Autocomplete System**
     - Trie data structure implementation
     - LLM filtering for noisy terms
     - Weighted relevance scoring
     - Component Diagram: 5 components with ranking algorithm

#### 2. **Innomatics Research Labs - Data Science Intern** (January 2024 - April 2024)
   - **Project 1: Product Review Sentiment Analysis System**
     - 8,500+ product reviews analyzed
     - F1-Score: 0.92 (BERT model)
     - Prefect ETL pipeline
     - MLflow experiment tracking
     - Component Diagram: 8 components with ML pipeline
   
   - **Project 2: Generative AI Code Review Application**
     - 40% reduction in code review time
     - OpenAI API integration
     - Multi-language support
     - Component Diagram: 7 components with LLM integration

### **6 Key Projects**

#### 1. **SkinShade AI**
   - **GitHub**: https://github.com/kushal511/SkinShade-AI
   - **Tech Stack**: Python, TensorFlow Lite, PyTorch, MTCNN, OpenCV, scikit-learn, Gradio, NumPy
   - **Key Features**:
     - MTCNN face detection
     - HSV-based segmentation
     - K-Means clustering
     - CelebA dataset
     - 5-color palette generation

#### 2. **Semantic Search Engine**
   - **GitHub**: https://github.com/kushal511/Semantic_search_Engine
   - **Tech Stack**: Python, BERT, SentenceTransformers, ChromaDB, Cosine Similarity
   - **Key Features**:
     - 30,000 subtitles vectorized
     - BERT-based embeddings
     - Semantic understanding
     - ChromaDB for fast retrieval

#### 3. **RAG System on "Leave No Context Behind" Research Paper**
   - **GitHub**: https://github.com/kushal511/Rag_system
   - **Tech Stack**: Python, LangChain, Google Gemini 1.5 Pro, ChromaDB, PyPDFLoader
   - **Key Features**:
     - Document chunking
     - Vector embeddings
     - Semantic search
     - Context-aware responses

#### 4. **Generative AI Code Review Application**
   - **GitHub**: https://github.com/kushal511/Code_ReviewerApplication
   - **Tech Stack**: Python, OpenAI API, Flask, NLP, Git
   - **Key Features**:
     - 40% time reduction
     - Bug detection
     - Security analysis
     - Multi-language support

#### 5. **Distributed Food Delivery Platform**
   - **GitHub**: https://github.com/kushal511/Uber_eats_Lab2 (Lab 1 & Lab 2)
   - **Tech Stack**: ReactJS, Node.js, Express.js, MongoDB, Redux, Docker, Kubernetes, Apache Kafka, AWS, JMeter
   - **Key Features**:
     - Microservices architecture
     - Real-time order tracking
     - Event-driven with Kafka
     - Kubernetes orchestration
     - AWS deployment

#### 6. **Intelligent Transportation System**
   - **GitHub**: https://github.com/bencejdanko/uber-simulation-system
   - **Tech Stack**: Node.js, Express, MongoDB, REST APIs, Docker, Apache JMeter, Machine Learning
   - **Key Features**:
     - 3-tier distributed system
     - Dynamic pricing algorithm
     - Uber Fares Kaggle dataset
     - Load testing (10k+ records)

## 🎨 UI Features

### **Advanced Interactions**
- ✅ Framer Motion animations throughout
- ✅ Parallax scrolling effects
- ✅ Magnetic hover on CTAs
- ✅ Smooth page transitions
- ✅ Component diagrams with visual data flow
- ✅ Interactive architecture visualizations
- ✅ Dark/Light mode toggle
- ✅ Command Palette (⌘K)
- ✅ Resume modal with dual PDF preview

### **Pages**
1. **Home** (`/`) - Animated hero with stats and skills
2. **Projects** (`/projects`) - 6 projects with search
3. **Internships** (`/internships`) - Detailed component diagrams
4. **About** (`/about`) - Skills, experience, education
5. **Contact** (`/contact`) - Form with validation
6. **Project Details** (`/project/[slug]`) - Individual project pages

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: Zustand
- **Validation**: Zod
- **Theme**: next-themes
- **Command Menu**: cmdk

## 📁 File Structure

```
portfolio-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Home
│   ├── projects/page.tsx           # Projects gallery
│   ├── project/[slug]/page.tsx     # Project details
│   ├── internships/page.tsx        # Internships with diagrams
│   ├── about/page.tsx              # About page
│   └── contact/page.tsx            # Contact form
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── ComponentDiagram.tsx        # Architecture diagrams
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   ├── ThemeToggle.tsx
│   ├── CommandMenu.tsx
│   └── ResumeModal.tsx
├── content/
│   ├── projects-new.ts             # 6 projects data
│   └── internships.ts              # Internship data with diagrams
├── lib/
│   └── utils.ts
└── public/
    ├── resume_primary.pdf
    ├── resume_alt.pdf
    └── projects/                   # Project images
```

## 🚀 Getting Started

### **1. Start Development Server**
```bash
cd /Users/mac_kushal/Desktop/Portfolio/portfolio-app
npm run dev
```

### **2. Open in Browser**
Visit: http://localhost:3000

### **3. Test Features**
- ⌘K for command palette
- Toggle dark/light mode
- Navigate to /internships to see component diagrams
- Check all 6 projects
- Test resume modal

### **4. Add Your Assets**
- Copy profile photo to `/public/profile.jpg`
- Resumes at `/public/resume_primary.pdf` and `/public/resume_alt.pdf`

## 📊 Component Diagrams

Each internship project includes:
- **System Components Grid** - Visual cards showing all components
- **Data Flow Diagram** - Step-by-step data flow with arrows
- **Architecture Flow** - Visual representation of system architecture
- **Technologies Used** - Badges for each component's tech stack

## 🎯 Key Highlights

### **Internships**
- ✅ Amazon: 2 projects with full component diagrams
- ✅ Innomatics: 2 projects with ML pipeline diagrams
- ✅ Visual architecture representations
- ✅ Data flow visualizations

### **Projects**
- ✅ All 6 projects with correct GitHub repos
- ✅ Accurate tech stacks from resumes
- ✅ Detailed descriptions and highlights
- ✅ Professional project names

### **UI/UX**
- ✅ Extremely advanced animations
- ✅ Premium design aesthetic
- ✅ Fully responsive
- ✅ Accessibility compliant
- ✅ SEO optimized

## 🌐 Deployment

### **Vercel (Recommended)**
1. Push to GitHub
2. Import in Vercel
3. Auto-deploy!

## 📝 Content Updates

### **To Add New Project**
Edit `/content/projects-new.ts` and add new project object.

### **To Update Internships**
Edit `/content/internships.ts` to modify component diagrams.

### **To Change Resumes**
Replace files in `/public/` directory.

## ✨ What Makes This Portfolio Elite

1. **Component Diagrams** - Visual system architectures for all internship projects
2. **6 Impactful Projects** - Carefully selected from resumes
3. **Accurate Tech Stacks** - Verified from GitHub repos and resumes
4. **Advanced UI** - Framer Motion, smooth transitions, interactive elements
5. **Professional Design** - Premium aesthetic with attention to detail
6. **Complete Documentation** - Comprehensive README and guides

## 🎉 Status

**✅ COMPLETE AND PRODUCTION-READY!**

All features implemented, all data accurate, all diagrams created. Ready to deploy and showcase!
