'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, MapPin, Building2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ComponentDiagram } from '@/components/ComponentDiagram';
import { internships } from '@/content/internships';

export default function InternshipProjectDetailPage() {
  const params = useParams();
  const internship = internships.find(i => i.slug === params.slug);
  const projectIndex = parseInt(params.projectId as string);
  const project = internship?.projects[projectIndex];

  if (!internship || !project) {
    return (
      <div className="container px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The internship project you&apos;re looking for doesn&apos;t exist.</p>
        <Button asChild>
          <Link href="/internships">Back to Internships</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${internship.gradient} opacity-5`} />
        </div>

        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Internships
            </Link>

            {/* Company Header */}
            <div className="flex items-start gap-6 mb-8">
              <div className="text-6xl">{internship.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-5 h-5 text-muted-foreground" />
                  <h2 className="text-2xl font-bold">{internship.company}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-3">{internship.role}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {internship.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {internship.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">📋 Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </Card>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">✨ Key Highlights</h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="text-primary text-sm font-bold">✓</span>
                      </div>
                      <p className="text-muted-foreground flex-1">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">🛠️ Technology Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-base px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* System Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">🏗️ System Architecture</h2>
                <ComponentDiagram
                  components={project.architecture.components}
                  dataFlow={project.architecture.dataFlow}
                />
              </Card>
            </motion.div>

            {/* End-to-End Flow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">🔄 End-to-End Flow</h2>
                <div className="space-y-6">
                  {project.architecture.dataFlow.map((flow, index) => (
                    <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0">
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-lg font-semibold">
                          <span className="text-primary">Step {index + 1}:</span>
                          <span>{flow.from} → {flow.to}</span>
                        </div>
                        <p className="text-muted-foreground">{flow.description}</p>
                        <Badge variant="secondary">{flow.data}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Technical Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">📊 Component Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.architecture.components.map((component, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border">
                      <h3 className="font-bold text-lg mb-2">{component.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{component.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {component.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Impact & Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <h2 className="text-3xl font-bold mb-6">🎯 Impact & Results</h2>
                <div className="space-y-4">
                  {project.highlights.slice(0, 3).map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-lg">{highlight}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
