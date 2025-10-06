'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { projects, searchProjects } from '@/content/projects-new';

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Featured Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Projects & <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Innovations</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of AI/ML systems, full-stack applications, and data engineering solutions
            </p>
          </motion.div>

          {/* Search Bar */}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredProject(project.slug)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <Link href={`/project/${project.slug}`}>
                      <Card className="group relative h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        {/* Content */}
                        <div className="relative p-6 space-y-4">
                          {/* Icon & Title */}
                          <div className="flex items-start gap-4">
                            <motion.div
                              className="text-4xl"
                              animate={{
                                scale: hoveredProject === project.slug ? 1.2 : 1,
                                rotate: hoveredProject === project.slug ? 10 : 0,
                              }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              {project.icon}
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {project.title}
                              </h3>
                            </div>
                          </div>

                          {/* Summary */}
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {project.summary}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{project.tags.length - 3}
                              </Badge>
                            )}
                          </div>

                          {/* Tech Stack */}
                          <div className="pt-4 border-t border-border/50">
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.tech.length > 4 && (
                                <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                                  +{project.tech.length - 4}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex items-center gap-2 pt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="gap-2"
                              asChild
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-4 h-4" />
                                Code
                              </a>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="gap-2 ml-auto"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Details
                            </Button>
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <motion.div
                          className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                          initial={false}
                          animate={{
                            scale: hoveredProject === project.slug ? 1.02 : 1,
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        />
                      </Card>
                    </Link>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}
