'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ResumeModal } from '@/components/ResumeModal';

const stats = [
  { label: 'Projects Shipped', value: '10+' },
  { label: 'Technologies', value: '20+' },
];

const skills = [
  'GenAI & LLMs',
  'RAG Systems',
  'Machine Learning',
  'Deep Learning',
  'Python',
  'JavaScript/TypeScript',
  'React',
  'Node.js',
  'Distributed Systems',
  'Docker & Kubernetes',
  'AWS',
  'MongoDB',
  'REST APIs',
  'Vector Databases',
  'Apache Kafka',
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{ y }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm gap-2">
                <Sparkles className="w-4 h-4" />
                Available for opportunities
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block">Kushal Adhyaru</span>
                <span className="block mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Building AI-powered products
                </span>
                <span className="block mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  end-to-end
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              GenAI, RAG, recommenders, and full-stack systems. I design, train, and ship.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2"
              >
                <Link href="/internships">
                  Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <ResumeModal
                trigger={
                  <Button size="lg" variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                }
              />
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="gap-2"
              >
                <a
                  href="https://github.com/kushal511"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center gap-16 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section id="featured-projects" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my work in AI/ML, full-stack development, and system design
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <Button size="lg" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
