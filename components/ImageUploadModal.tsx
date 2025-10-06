'use client';

import * as React from 'react';
import { Upload, X, Image as ImageIcon, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageUploadModalProps {
  trigger?: React.ReactNode;
  onImageUpload?: (imageUrl: string) => void;
}

export function ImageUploadModal({ trigger, onImageUpload }: ImageUploadModalProps) {
  const [isDragging, setIsDragging] = React.useState(false);
  const [uploadedImage, setUploadedImage] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    // Create object URL for preview
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);

    // Call callback if provided
    if (onImageUpload) {
      onImageUpload(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
    }
    setUploadedImage(null);
  };

  const handleSave = () => {
    if (uploadedImage && onImageUpload) {
      onImageUpload(uploadedImage);
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" variant="outline" className="gap-2">
            <Upload className="w-4 h-4" />
            Upload Image
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
          <DialogDescription>
            Upload an image from your system. Drag and drop or click to browse.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {!uploadedImage ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`
                relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer
                transition-all duration-200
                ${isDragging 
                  ? 'border-primary bg-primary/5 scale-[1.02]' 
                  : 'border-border hover:border-primary/50 hover:bg-muted/30'
                }
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              <div className="flex flex-col items-center gap-4">
                <div className={`
                  p-4 rounded-full transition-colors
                  ${isDragging ? 'bg-primary/20' : 'bg-muted'}
                `}>
                  <Upload className={`
                    w-8 h-8 transition-colors
                    ${isDragging ? 'text-primary' : 'text-muted-foreground'}
                  `} />
                </div>
                
                <div>
                  <p className="text-lg font-semibold mb-1">
                    {isDragging ? 'Drop your image here' : 'Drag & drop your image here'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click to browse from your computer
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" />
                    <span>JPG, PNG, WebP</span>
                  </div>
                  <div>•</div>
                  <div>Max 5MB</div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted">
                <Image
                  src={uploadedImage}
                  alt="Uploaded preview"
                  fill
                  className="object-contain"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 p-2 rounded-full bg-background/80 hover:bg-background border shadow-sm transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <Check className="w-4 h-4 text-green-500" />
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Image uploaded successfully!
                </p>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleRemoveImage} variant="outline" className="flex-1">
                  <X className="w-4 h-4 mr-2" />
                  Remove
                </Button>
                <Button onClick={handleSave} className="flex-1">
                  <Check className="w-4 h-4 mr-2" />
                  Save Image
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
