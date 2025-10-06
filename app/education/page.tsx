'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { education } from '@/content/education';

export default function EducationPage() {
  return (
    <div className="relative min-h-screen">
      {/* Quick Education Summary for Recruiters */}
      <section className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border-b">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-lg bg-white/5"
            >
              <div className="text-2xl font-bold text-primary mb-2">🎓 MS Data Science</div>
              <div className="text-sm font-semibold mb-1">San Jose State University</div>
              <div className="text-xs text-muted-foreground">Specialization: Data Engineering</div>
              <div className="text-lg font-bold text-primary mt-2">GPA: 3.5/4.0</div>
              <div className="text-xs text-muted-foreground">Aug 2024 - May 2026</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-4 rounded-lg bg-white/5"
            >
              <div className="text-2xl font-bold text-primary mb-2">🎓 B.Tech CS</div>
              <div className="text-sm font-semibold mb-1">Indus Institute of Technology</div>
              <div className="text-xs text-muted-foreground">Gujarat, India</div>
              <div className="text-lg font-bold text-green-500 mt-2">GPA: 4.0/4.0</div>
              <div className="text-xs text-muted-foreground">June 2019 - May 2023</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-4 rounded-lg bg-white/5"
            >
              <div className="text-2xl font-bold text-primary mb-2">📚 13 Courses</div>
              <div className="text-sm font-semibold mb-1">Relevant Coursework</div>
              <div className="text-xs text-muted-foreground mb-2">Data Science, ML, Big Data</div>
              <div className="flex flex-wrap gap-1 justify-center mt-2">
                <Badge variant="secondary" className="text-xs">ML</Badge>
                <Badge variant="secondary" className="text-xs">Big Data</Badge>
                <Badge variant="secondary" className="text-xs">Algorithms</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Academic <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My educational background and coursework in Data Science, Machine Learning, and Computer Science
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="max-w-5xl mx-auto space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  {/* Header */}
                  <div className={`p-8 bg-gradient-to-r ${edu.gradient}`}>
                    <div className="flex items-start gap-6">
                      <div className="text-6xl">{edu.icon}</div>
                      <div className="flex-1 text-white">
                        <h2 className="text-3xl font-bold mb-2">{edu.degree}</h2>
                        <p className="text-xl mb-1 opacity-90">{edu.major}</p>
                        <p className="text-lg mb-4 opacity-80">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm opacity-80">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          {edu.gpa && (
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              GPA: {edu.gpa}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-8">
                    {/* Highlights */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        Highlights
                      </h3>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                            className="flex gap-3 text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▸</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Coursework */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-primary" />
                        Related Coursework
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {edu.courses.map((course, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                          >
                            <Card className="p-4 hover:shadow-lg transition-shadow bg-muted/30">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h4 className="font-semibold text-sm">{course.name}</h4>
                                {course.credits && (
                                  <Badge variant="secondary" className="text-xs">
                                    {course.credits} credits
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="font-mono">{course.code}</span>
                                {course.grade && (
                                  <>
                                    <span>•</span>
                                    <span className="font-semibold text-primary">{course.grade}</span>
                                  </>
                                )}
                                {course.semester && (
                                  <>
                                    <span>•</span>
                                    <span>{course.semester}</span>
                                  </>
                                )}
                              </div>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Course Categories */}
                    <div>
                      <h3 className="text-xl font-bold mb-4">Course Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {Array.from(new Set(edu.courses.map(c => {
                          // Extract category from course name
                          if (c.name.toLowerCase().includes('data')) return 'Data Science';
                          if (c.name.toLowerCase().includes('machine learning') || c.name.toLowerCase().includes('ml')) return 'Machine Learning';
                          if (c.name.toLowerCase().includes('database')) return 'Databases';
                          if (c.name.toLowerCase().includes('big data') || c.name.toLowerCase().includes('distributed')) return 'Big Data';
                          if (c.name.toLowerCase().includes('algorithm')) return 'Algorithms';
                          if (c.name.toLowerCase().includes('math')) return 'Mathematics';
                          if (c.name.toLowerCase().includes('visualization') || c.name.toLowerCase().includes('intelligence')) return 'Analytics';
                          return 'Computer Science';
                        }))).map((category, idx) => (
                          <Badge key={idx} variant="outline" className="text-sm px-3 py-1">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h2 className="text-2xl font-bold mb-6 text-center">Academic Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {education.length}
                  </div>
                  <div className="text-muted-foreground">Degrees</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {education.reduce((sum, edu) => sum + edu.courses.length, 0)}
                  </div>
                  <div className="text-muted-foreground">Courses Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    4.0
                  </div>
                  <div className="text-muted-foreground">Perfect GPA (B.Tech)</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
