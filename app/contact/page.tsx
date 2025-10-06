'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:kushalatulbhai.adhyaru@sjsu.edu',
    icon: Mail,
    description: 'kushalatulbhai.adhyaru@sjsu.edu',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kushal-adhyaru/',
    icon: Linkedin,
    description: 'Connect on LinkedIn',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/kushal511',
    icon: Github,
    description: 'Follow on GitHub',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }

    setIsSubmitting(true);
    
    // TODO: Implement actual form submission (e.g., to an API endpoint or email service)
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

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
              Get in <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <p className="text-green-500">Message sent successfully! I&apos;ll get back to you soon.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through any of these channels
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{link.name}</p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border-primary/20">
                <h3 className="text-xl font-bold mb-2">Open to Opportunities</h3>
                <p className="text-muted-foreground">
                  I&apos;m actively seeking <strong>Spring 2026 internships</strong> and <strong>co-op opportunities</strong> in AI/ML, Data Science, Generative AI, and Software Engineering roles. Also open to <strong>full-time positions</strong> starting Summer 2026 upon graduation.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
