'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Linkedin, Github, Mail, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ResumeModal } from '@/components/ResumeModal';

const skills = [
  { category: 'AI/ML', items: ['GenAI & LLMs', 'RAG Systems', 'Deep Learning', 'NLP', 'Computer Vision', 'Recommender Systems'], level: 95 },
  { category: 'Languages', items: ['Python', 'JavaScript/TypeScript', 'Java', 'SQL', 'C++'], level: 90 },
  { category: 'Frameworks', items: ['TensorFlow', 'PyTorch', 'React', 'FastAPI', 'Node.js', 'Express'], level: 92 },
  { category: 'Data & Cloud', items: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes'], level: 88 },
  { category: 'Tools', items: ['Git', 'LangChain', 'ChromaDB', 'Kafka', 'Apache JMeter'], level: 85 },
];

const experience = [
  {
    title: 'Software Development Engineer Intern',
    company: 'Amazon',
    period: 'May 2025 - August 2025',
    description: 'Built end-to-end search query classification system processing 50K+ queries with LLM-powered categorization. Developed prefix-based autocomplete using Trie data structure with weighted relevance scoring.',
    icon: Briefcase,
  },
  {
    title: 'Data Science Intern',
    company: 'Innomatics Research Labs',
    period: 'January 2024 - April 2024',
    description: 'Engineered sentiment analysis system for 8,500+ product reviews achieving F1-Score of 0.92. Built Generative AI Code Review application reducing review time by 40%.',
    icon: Briefcase,
  },
  {
    title: 'Master of Science in Data Science',
    company: 'San Jose State University',
    period: 'August 2024 - May 2026',
    description: 'Specialization in Data Engineering | GPA: 3.5/4.0',
    icon: GraduationCap,
  },
  {
    title: 'Bachelor of Technology in Computer Science',
    company: 'Indus Institute of Technology & Engineering',
    period: 'June 2019 - May 2023',
    description: 'GPA: 4.0/4.0',
    icon: GraduationCap,
  },
];

export default function AboutPage() {
  const [imageLoaded, setImageLoaded] = React.useState<boolean>(true);
  const [imageError, setImageError] = React.useState<boolean>(false);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-4 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" />
                <img
                  src={`/profile.jpg?v=${Date.now()}`}
                  alt="Kushal Adhyaru"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  onLoad={() => {
                    setImageLoaded(true);
                    setImageError(false);
                  }}
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    setImageLoaded(false);
                    setImageError(true);
                  }}
                />
                {/* Fallback initials if image not loaded or error */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-500 z-0">
                    <div className="text-white text-6xl font-bold">KA</div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  AI/ML Engineer | Full-Stack Builder
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m a <strong>Master&apos;s student in Data Science</strong> at San Jose State University, specializing in Data Engineering. 
                  With a perfect 4.0 GPA from my B.Tech in Computer Science and hands-on experience at <strong>Amazon</strong> and 
                  <strong> Innomatics Research Labs</strong>, I build AI-powered systems that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At <strong>Amazon</strong>, I developed an end-to-end search query classification system processing 50,000+ queries 
                  using LLMs and built a sophisticated autocomplete system with Trie data structures. At <strong>Innomatics Research Labs</strong>, 
                  I engineered a sentiment analysis system achieving an F1-Score of 0.92 and created a GenAI code review application 
                  that reduced review time by 40%.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans <strong>GenAI, RAG systems, Machine Learning, and Full-Stack Development</strong>. I&apos;ve built 
                  10+ production-grade projects including semantic search engines, distributed food delivery platforms, and 
                  intelligent transportation systems. I&apos;m passionate about creating scalable, impactful solutions using cutting-edge 
                  technologies like LangChain, ChromaDB, Docker, Kubernetes, and AWS.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <ResumeModal
                  trigger={
                    <Button size="lg" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download Resume
                    </Button>
                  }
                />
                <Button size="lg" variant="outline" asChild className="gap-2">
                  <a href="https://www.linkedin.com/in/kushal-adhyaru/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2">
                  <a href="https://github.com/kushal511" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2">
                  <a href="mailto:kushalatulbhai.adhyaru@sjsu.edu">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with regularly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{skill.category}</h3>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
            <p className="text-lg text-muted-foreground">
              My professional journey and academic background
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.company}</p>
                        </div>
                        <Badge variant="outline">{item.period}</Badge>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
