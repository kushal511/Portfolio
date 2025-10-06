'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Database, Server, Globe, Cpu, HardDrive } from 'lucide-react';
import type { Component, DataFlow } from '@/content/internships';

interface ComponentDiagramProps {
  components: Component[];
  dataFlow: DataFlow[];
}

const getIconForType = (type: Component['type']) => {
  switch (type) {
    case 'service':
      return Server;
    case 'database':
      return Database;
    case 'api':
      return Globe;
    case 'algorithm':
      return Cpu;
    case 'storage':
      return HardDrive;
    case 'frontend':
      return Globe;
    default:
      return Server;
  }
};

const getColorForType = (type: Component['type']) => {
  switch (type) {
    case 'service':
      return 'from-blue-500 to-cyan-600';
    case 'database':
      return 'from-green-500 to-emerald-600';
    case 'api':
      return 'from-purple-500 to-pink-600';
    case 'algorithm':
      return 'from-orange-500 to-red-600';
    case 'storage':
      return 'from-yellow-500 to-amber-600';
    case 'frontend':
      return 'from-indigo-500 to-purple-600';
    default:
      return 'from-gray-500 to-slate-600';
  }
};

export function ComponentDiagram({ components, dataFlow }: ComponentDiagramProps) {
  return (
    <div className="space-y-8">
      {/* Components Grid */}
      <div>
        <h3 className="text-xl font-bold mb-4">System Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((component, index) => {
            const Icon = getIconForType(component.type);
            const gradient = getColorForType(component.type);
            
            return (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="p-4 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1">{component.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {component.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {component.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Data Flow */}
      <div>
        <h3 className="text-xl font-bold mb-4">Data Flow</h3>
        <Card className="p-6">
          <div className="space-y-4">
            {dataFlow.map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm">{flow.from}</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-sm">{flow.to}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {flow.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {flow.data}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>

      {/* Architecture Diagram (Visual Flow) */}
      <div>
        <h3 className="text-xl font-bold mb-4">Architecture Flow</h3>
        <Card className="p-6 bg-gradient-to-br from-muted/30 to-muted/10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {components.map((component, index) => {
              const Icon = getIconForType(component.type);
              const gradient = getColorForType(component.type);
              
              return (
                <React.Fragment key={component.name}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
                      <Icon className="w-6 h-6 mb-2" />
                      <p className="text-xs font-semibold text-center whitespace-nowrap">
                        {component.name}
                      </p>
                    </div>
                  </motion.div>
                  {index < components.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    >
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
