'use client';

import * as React from 'react';
import { Download, FileText, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const resumes = [
  {
    id: 'software',
    name: 'Software Engineering Resume',
    description: 'Full-stack development, distributed systems, and cloud technologies',
    file: '/resume_alt.pdf',
  },
  {
    id: 'aiml',
    name: 'AI/ML Resume',
    description: 'Machine learning, deep learning, NLP, and data science',
    file: '/resume_primary.pdf',
  },
];

interface ResumeModalProps {
  trigger?: React.ReactNode;
}

export function ResumeModal({ trigger }: ResumeModalProps) {
  const [activeTab, setActiveTab] = React.useState('software');

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Resume Preview & Download</DialogTitle>
          <DialogDescription>
            Preview both resumes side-by-side and download your preferred version
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            {resumes.map((resume) => (
              <TabsTrigger key={resume.id} value={resume.id} className="gap-2">
                <FileText className="w-4 h-4" />
                {resume.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {resumes.map((resume) => (
            <TabsContent key={resume.id} value={resume.id} className="space-y-4 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{resume.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {resume.description}
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <a href={resume.file} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="border rounded-lg overflow-hidden bg-muted/20"
              >
                <object
                  data={resume.file}
                  type="application/pdf"
                  className="w-full h-[70vh]"
                >
                  <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
                    <FileText className="w-16 h-16 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      PDF preview not available in your browser
                    </p>
                    <Button asChild>
                      <a href={resume.file} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </object>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Side-by-side comparison button */}
        <div className="flex items-center justify-center pt-2 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // Open both resumes in new tabs for comparison
              resumes.forEach(resume => {
                window.open(resume.file, '_blank');
              });
            }}
            className="gap-2"
          >
            <Eye className="w-4 h-4" />
            Compare Both Resumes Side-by-Side
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
