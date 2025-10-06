# 🏗️ Architecture Diagram - Image Upload & Resume Preview

## 📊 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         About Page                              │
│                    (/app/about/page.tsx)                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Contains
                              ▼
        ┌─────────────────────────────────────────────┐
        │         Profile Section                     │
        │  ┌──────────────────────────────────────┐   │
        │  │   Profile Image Display              │   │
        │  │   - Shows current image              │   │
        │  │   - Fallback to initials (KA)        │   │
        │  └──────────────────────────────────────┘   │
        │                                             │
        │  ┌──────────────────────────────────────┐   │
        │  │   Upload Photo Button                │   │
        │  │   - Triggers ImageUploadModal        │   │
        │  └──────────────────────────────────────┘   │
        │                                             │
        │  ┌──────────────────────────────────────┐   │
        │  │   Download Resume Button             │   │
        │  │   - Triggers ResumeModal             │   │
        │  └──────────────────────────────────────┘   │
        └─────────────────────────────────────────────┘
                    │                    │
                    │                    │
                    ▼                    ▼
        ┌───────────────────┐  ┌───────────────────┐
        │ ImageUploadModal  │  │   ResumeModal     │
        │   Component       │  │   Component       │
        └───────────────────┘  └───────────────────┘
```

---

## 🎨 Component Hierarchy

```
AboutPage
├── ProfileSection
│   ├── ProfileImage (state: profileImage)
│   │   └── Image component
│   │       └── Fallback (KA initials)
│   │
│   ├── ImageUploadModal
│   │   ├── Dialog (Radix UI)
│   │   ├── Drag & Drop Area
│   │   ├── File Input
│   │   ├── Image Preview
│   │   └── Action Buttons
│   │       ├── Remove
│   │       └── Save
│   │
│   └── ResumeModal
│       ├── Dialog (Radix UI)
│       ├── Tabs (Radix UI)
│       │   ├── Tab 1: Software Engineering
│       │   └── Tab 2: AI/ML
│       ├── PDF Preview (object tag)
│       └── Action Buttons
│           ├── Download
│           └── Compare Both
│
├── SkillsSection
├── ExperienceSection
└── EducationSection
```

---

## 🔄 Data Flow - Image Upload

```
┌─────────────────────────────────────────────────────────────────┐
│                    User Action: Upload Image                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 1: User clicks "Upload Photo" button                      │
│  - Opens ImageUploadModal                                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 2: User interacts with modal                              │
│  - Option A: Drag & drop image                                  │
│  - Option B: Click to browse and select                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 3: File Validation                                        │
│  - Check file type (must be image)                              │
│  - Check file size (max 5MB)                                    │
│  - If invalid → Show error alert                                │
│  - If valid → Continue                                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 4: Create Preview                                         │
│  - Create Object URL: URL.createObjectURL(file)                 │
│  - Set uploadedImage state                                      │
│  - Display preview in modal                                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 5: User confirms                                          │
│  - User clicks "Save Image"                                     │
│  - Call onImageUpload callback                                  │
│  - Update profileImage state in AboutPage                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 6: UI Updates                                             │
│  - Profile image re-renders with new image                      │
│  - Modal closes                                                 │
│  - User sees updated profile photo                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow - Resume Preview

```
┌─────────────────────────────────────────────────────────────────┐
│                  User Action: View Resumes                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 1: User clicks "Download Resume" button                   │
│  - Opens ResumeModal                                            │
│  - Default tab: Software Engineering                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 2: Modal displays tabs                                    │
│  - Tab 1: Software Engineering Resume                           │
│  - Tab 2: AI/ML Resume                                          │
│  - Active tab shows PDF preview                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 3: PDF Preview loads                                      │
│  - <object> tag embeds PDF                                      │
│  - Browser renders PDF if supported                             │
│  - Fallback UI if not supported                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 4: User actions                                           │
│  - Option A: Switch tabs to view other resume                   │
│  - Option B: Click "Download" to save current resume            │
│  - Option C: Click "Compare Both" to open both in new tabs      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🗂️ State Management

### AboutPage State:
```typescript
const [profileImage, setProfileImage] = useState<string>('/profile.jpg');

// Updated by ImageUploadModal callback
const handleImageUpload = (imageUrl: string) => {
  setProfileImage(imageUrl);
};
```

### ImageUploadModal State:
```typescript
const [isDragging, setIsDragging] = useState(false);
const [uploadedImage, setUploadedImage] = useState<string | null>(null);
const [isOpen, setIsOpen] = useState(false);
```

### ResumeModal State:
```typescript
const [activeTab, setActiveTab] = useState('software');
```

---

## 📦 Component Props

### ImageUploadModal:
```typescript
interface ImageUploadModalProps {
  trigger?: React.ReactNode;           // Custom button
  onImageUpload?: (imageUrl: string) => void;  // Callback
}
```

### ResumeModal:
```typescript
interface ResumeModalProps {
  trigger?: React.ReactNode;           // Custom button
}
```

---

## 🎯 Event Flow

### Image Upload Events:

```
User Event          →  Handler              →  State Update
─────────────────────────────────────────────────────────────
Drag Over           →  handleDragOver       →  isDragging = true
Drag Leave          →  handleDragLeave      →  isDragging = false
Drop File           →  handleDrop           →  Process file
Click Browse        →  handleFileSelect     →  Process file
File Selected       →  handleFileUpload     →  uploadedImage = URL
Click Remove        →  handleRemoveImage    →  uploadedImage = null
Click Save          →  handleSave           →  onImageUpload(url)
```

### Resume Preview Events:

```
User Event          →  Handler              →  State Update
─────────────────────────────────────────────────────────────
Click Tab           →  onValueChange        →  activeTab = 'software'/'aiml'
Click Download      →  <a> tag              →  Browser download
Click Compare       →  handleCompare        →  window.open() x2
```

---

## 🔌 Integration Points

### 1. About Page → ImageUploadModal
```typescript
<ImageUploadModal
  onImageUpload={handleImageUpload}  // Callback
  trigger={<Button>Upload Photo</Button>}
/>
```

### 2. About Page → ResumeModal
```typescript
<ResumeModal
  trigger={<Button>Download Resume</Button>}
/>
```

### 3. ImageUploadModal → About Page
```typescript
// Callback when image is saved
onImageUpload?.(imageUrl);
```

---

## 📁 File System Integration

### Image Upload:
```
User's File System
       ↓
File API (browser)
       ↓
Object URL (blob:http://...)
       ↓
React State (profileImage)
       ↓
Next.js Image Component
       ↓
Rendered on Page
```

### Resume Preview:
```
/public/resume_alt.pdf
       ↓
Static File Serving (Next.js)
       ↓
<object> tag (data="/resume_alt.pdf")
       ↓
Browser PDF Renderer
       ↓
Displayed in Modal
```

---

## 🎨 UI Component Stack

```
┌─────────────────────────────────────────┐
│         Radix UI Dialog                 │
│  - Accessible modal                     │
│  - Keyboard navigation                  │
│  - Focus management                     │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         Framer Motion                   │
│  - Smooth animations                    │
│  - Enter/exit transitions               │
│  - Gesture support                      │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         Tailwind CSS                    │
│  - Utility-first styling                │
│  - Responsive design                    │
│  - Dark mode support                    │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         Lucide Icons                    │
│  - Upload, Download, Eye, etc.          │
│  - Consistent icon set                  │
└─────────────────────────────────────────┘
```

---

## 🔒 Security Flow

### Image Upload Security:
```
File Selected
     ↓
Client-side Validation
     ├─ File Type Check (image/*)
     ├─ File Size Check (< 5MB)
     └─ MIME Type Validation
     ↓
Create Object URL (local only)
     ↓
Display Preview (no upload to server)
     ↓
User Saves (updates local state only)
```

### Resume Access Security:
```
User Clicks Download
     ↓
Static File Request (/public/resume.pdf)
     ↓
Next.js Static File Serving
     ↓
Browser Download (download attribute)
     ↓
File Saved to User's System
```

---

## 📊 Performance Optimization

### Image Upload:
```
┌─────────────────────────────────────────┐
│  Optimization Strategy                  │
├─────────────────────────────────────────┤
│  1. Object URL (no base64 encoding)     │
│  2. Lazy component loading              │
│  3. Cleanup on unmount                  │
│  4. File size validation                │
│  5. Debounced drag events               │
└─────────────────────────────────────────┘
```

### Resume Preview:
```
┌─────────────────────────────────────────┐
│  Optimization Strategy                  │
├─────────────────────────────────────────┤
│  1. Lazy load PDFs (tab-based)          │
│  2. Static file serving (Next.js)       │
│  3. Browser-native PDF rendering        │
│  4. Code splitting (dynamic import)     │
│  5. Optimized animations (GPU)          │
└─────────────────────────────────────────┘
```

---

## 🔄 Lifecycle

### ImageUploadModal Lifecycle:
```
Mount
  ↓
Initialize State (isDragging, uploadedImage, isOpen)
  ↓
User Interaction (drag/click)
  ↓
File Processing
  ↓
Preview Display
  ↓
User Saves/Cancels
  ↓
Cleanup (revoke Object URLs)
  ↓
Unmount
```

### ResumeModal Lifecycle:
```
Mount
  ↓
Initialize State (activeTab = 'software')
  ↓
Load Default Tab Content
  ↓
User Switches Tabs
  ↓
Load New Tab Content
  ↓
User Downloads/Compares
  ↓
Unmount
```

---

## 🎯 Summary

### Key Components:
1. **ImageUploadModal** - Handles image upload with validation
2. **ResumeModal** - Displays resume previews with tabs
3. **AboutPage** - Integrates both components

### Key Features:
1. **Drag & Drop** - Intuitive file upload
2. **Tabbed Preview** - Easy resume switching
3. **Validation** - File type and size checks
4. **Animations** - Smooth transitions
5. **Responsive** - Works on all devices

### Key Technologies:
1. **React** - Component state and lifecycle
2. **Next.js** - Image optimization and static files
3. **Radix UI** - Accessible components
4. **Framer Motion** - Smooth animations
5. **Tailwind CSS** - Utility-first styling

---

**Architecture designed for scalability, performance, and user experience!** 🚀
