'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ComponentDiagram } from '@/components/ComponentDiagram';
import { getProjectBySlug, projects } from '@/content/projects-new';

export default function ProjectDetailPage() {
  const params = useParams();
  const project = getProjectBySlug(params.slug as string);

  if (!project) {
    return (
      <div className="container px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
        <Button asChild>
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <div className="flex items-start gap-6 mb-8">
              <motion.div
                className="text-6xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {project.icon}
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="gap-2">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>
                <div className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground flex-1">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Project Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Links</h3>
                  <div className="space-y-3">
                    <Button asChild variant="outline" className="w-full justify-start gap-2">
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start gap-2">
                      <a href={`${project.repo}#readme`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Documentation
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">🏗️ System Architecture</h2>
            <ComponentDiagram
              components={project.architecture.components}
              dataFlow={project.architecture.dataFlow}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link href={`/project/${relatedProject.slug}`}>
                      <Card className="group h-full p-6 hover:border-primary/50 transition-all">
                        <div className="text-4xl mb-4">{relatedProject.icon}</div>
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedProject.summary}
                        </p>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
