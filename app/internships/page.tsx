'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ComponentDiagram } from '@/components/ComponentDiagram';
import { internships } from '@/content/internships';

export default function InternshipsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Internship <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep dive into the systems and architectures I built during my internships
            </p>
          </motion.div>

          {/* Internships */}
          <div className="space-y-16">
            {internships.map((internship, internshipIndex) => (
              <motion.div
                key={internship.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: internshipIndex * 0.2 }}
              >
                <Card className="overflow-hidden">
                  {/* Company Header */}
                  <div className={`p-8 bg-gradient-to-r ${internship.gradient}`}>
                    <div className="flex items-start gap-6">
                      <div className="text-6xl">{internship.icon}</div>
                      <div className="flex-1 text-white">
                        <h2 className="text-3xl font-bold mb-2">{internship.company}</h2>
                        <p className="text-xl mb-4 opacity-90">{internship.role}</p>
                        <div className="flex flex-wrap gap-4 text-sm opacity-80">
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
                  </div>

                  {/* Projects */}
                  <div className="p-8">
                    <Tabs defaultValue="0" className="w-full">
                      <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${internship.projects.length}, 1fr)` }}>
                        {internship.projects.map((project, index) => (
                          <TabsTrigger key={index} value={index.toString()}>
                            {project.title.split(' ').slice(0, 3).join(' ')}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {internship.projects.map((project, projectIndex) => (
                        <TabsContent key={projectIndex} value={projectIndex.toString()} className="space-y-6 mt-6">
                          {/* Project Header */}
                          <div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Key Highlights */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3">Key Highlights</h4>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                  className="flex gap-3 text-sm text-muted-foreground"
                                >
                                  <span className="text-primary mt-1">▸</span>
                                  <span>{highlight}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Component Diagram */}
                          <div className="pt-6">
                            <ComponentDiagram
                              components={project.architecture.components}
                              dataFlow={project.architecture.dataFlow}
                            />
                          </div>

                          {/* View Full Details Button */}
                          <div className="pt-6 text-center">
                            <Button asChild size="lg" className="gap-2">
                              <Link href={`/internship/${internship.slug}/${projectIndex}`}>
                                <ExternalLink className="w-4 h-4" />
                                View Full Project Details & README
                              </Link>
                            </Button>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
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
