# 🎨 Visual Guide - Image Upload & Resume Preview

## 📸 Feature Preview

### 1. Image Upload Feature

```
┌─────────────────────────────────────────────────────────────────┐
│                         About Page                              │
│                                                                 │
│  ┌─────────────────────┐                                        │
│  │                     │                                        │
│  │   Profile Photo     │                                        │
│  │                     │                                        │
│  │   [Your Image]      │                                        │
│  │                     │                                        │
│  │                     │    ┌──────────────────┐                │
│  │                     │    │ Upload Photo 📸  │ ← Click Here   │
│  └─────────────────────┘    └──────────────────┘                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    Click "Upload Photo"
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    Upload Image Modal                           │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │              📤  Drag & drop your image here              │  │
│  │                                                           │  │
│  │              or click to browse from your computer        │  │
│  │                                                           │  │
│  │              📷 JPG, PNG, WebP  •  Max 5MB                │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    Drag/Drop or Browse
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    Image Preview                                │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                      ✕    │  │
│  │                                                           │  │
│  │                  [Your Image Preview]                     │  │
│  │                                                           │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ✅ Image uploaded successfully!                                │
│                                                                 │
│  ┌──────────────┐              ┌──────────────┐                │
│  │  ✕ Remove    │              │  ✓ Save      │                │
│  └──────────────┘              └──────────────┘                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2. Resume Preview Feature

```
┌─────────────────────────────────────────────────────────────────┐
│                         About Page                              │
│                                                                 │
│  ┌──────────────────────────┐                                   │
│  │  📥 Download Resume      │  ← Click Here                     │
│  └──────────────────────────┘                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                  Click "Download Resume"
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│              Resume Preview & Download                          │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 📄 Software Engineering  │  📄 AI/ML Resume              │   │
│  │        Resume            │                               │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  📄 Software Engineering Resume                      ⬇️   │  │
│  │  Full-stack development, distributed systems...           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │                                                           │  │
│  │                  [PDF Preview Here]                       │  │
│  │                                                           │  │
│  │                  Your Resume Content                      │  │
│  │                                                           │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │        👁️ Compare Both Resumes Side-by-Side             │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎬 User Journey

### Journey 1: Upload Profile Image

```
Step 1: Navigate to About Page
┌─────────────────────────────┐
│  http://localhost:3000/about│
└─────────────────────────────┘
              ↓
Step 2: See Profile Section
┌─────────────────────────────┐
│  Profile Image              │
│  [Current Photo or KA]      │
│  [Upload Photo] Button      │
└─────────────────────────────┘
              ↓
Step 3: Click Upload Photo
┌─────────────────────────────┐
│  Modal Opens                │
│  Drag & Drop Area Visible   │
└─────────────────────────────┘
              ↓
Step 4: Select Image
┌─────────────────────────────┐
│  Option A: Drag & Drop      │
│  Option B: Click to Browse  │
└─────────────────────────────┘
              ↓
Step 5: Preview Image
┌─────────────────────────────┐
│  See Image Preview          │
│  [Remove] [Save] Buttons    │
└─────────────────────────────┘
              ↓
Step 6: Save Image
┌─────────────────────────────┐
│  Profile Photo Updates!     │
│  Modal Closes               │
└─────────────────────────────┘
```

### Journey 2: Preview Resumes

```
Step 1: Navigate to About Page
┌─────────────────────────────┐
│  http://localhost:3000/about│
└─────────────────────────────┘
              ↓
Step 2: Click Download Resume
┌─────────────────────────────┐
│  [Download Resume] Button   │
└─────────────────────────────┘
              ↓
Step 3: Modal Opens with Tabs
┌─────────────────────────────┐
│  Tab 1: Software Resume     │
│  Tab 2: AI/ML Resume        │
│  (Tab 1 Active by Default)  │
└─────────────────────────────┘
              ↓
Step 4: View PDF Preview
┌─────────────────────────────┐
│  PDF Loads in Browser       │
│  Full Preview Visible       │
└─────────────────────────────┘
              ↓
Step 5: Take Action
┌─────────────────────────────┐
│  Option A: Switch Tabs      │
│  Option B: Download PDF     │
│  Option C: Compare Both     │
└─────────────────────────────┘
```

---

## 🎨 Visual States

### Image Upload States

#### 1. Initial State (Empty)
```
┌───────────────────────────────┐
│                               │
│        📤 Upload Icon         │
│                               │
│   Drag & drop your image      │
│   or click to browse          │
│                               │
│   📷 JPG, PNG, WebP • 5MB     │
│                               │
└───────────────────────────────┘
```

#### 2. Dragging State (Active)
```
┌───────────────────────────────┐
│ ╔═══════════════════════════╗ │
│ ║                           ║ │
│ ║    📤 Drop your image     ║ │
│ ║         here              ║ │
│ ║                           ║ │
│ ║   (Blue border, scaled)   ║ │
│ ║                           ║ │
│ ╚═══════════════════════════╝ │
└───────────────────────────────┘
```

#### 3. Preview State (Image Loaded)
```
┌───────────────────────────────┐
│                          ✕    │
│   ┌───────────────────────┐   │
│   │                       │   │
│   │   [Your Image]        │   │
│   │                       │   │
│   └───────────────────────┘   │
│                               │
│  ✅ Image uploaded!            │
│                               │
│  [✕ Remove]    [✓ Save]       │
└───────────────────────────────┘
```

### Resume Preview States

#### 1. Tab 1 Active (Software Resume)
```
┌───────────────────────────────────────┐
│ ┏━━━━━━━━━━━━━━━━━━━┓ ┌─────────────┐ │
│ ┃ 📄 Software Resume┃ │ AI/ML Resume│ │
│ ┗━━━━━━━━━━━━━━━━━━━┛ └─────────────┘ │
│                                       │
│  [PDF Preview of Software Resume]     │
│                                       │
└───────────────────────────────────────┘
```

#### 2. Tab 2 Active (AI/ML Resume)
```
┌───────────────────────────────────────┐
│ ┌─────────────────┐ ┏━━━━━━━━━━━━━━┓  │
│ │ Software Resume │ ┃ 📄 AI/ML     ┃  │
│ └─────────────────┘ ┃    Resume    ┃  │
│                     ┗━━━━━━━━━━━━━━┛  │
│                                       │
│  [PDF Preview of AI/ML Resume]        │
│                                       │
└───────────────────────────────────────┘
```

---

## 📱 Responsive Views

### Mobile View (< 768px)

```
┌─────────────────┐
│  About Page     │
│                 │
│  ┌───────────┐  │
│  │           │  │
│  │  Profile  │  │
│  │  Image    │  │
│  │           │  │
│  └───────────┘  │
│                 │
│  [Upload Photo] │
│                 │
│  [Download      │
│   Resume]       │
│                 │
└─────────────────┘
```

### Tablet View (768px - 1024px)

```
┌─────────────────────────────┐
│      About Page             │
│                             │
│  ┌──────────┐  Content      │
│  │          │  - Name       │
│  │ Profile  │  - Bio        │
│  │ Image    │  - Buttons    │
│  │          │               │
│  └──────────┘               │
│  [Upload]                   │
│                             │
│  [Download Resume]          │
│                             │
└─────────────────────────────┘
```

### Desktop View (> 1024px)

```
┌─────────────────────────────────────────────────┐
│              About Page                         │
│                                                 │
│  ┌──────────────┐    ┌──────────────────────┐  │
│  │              │    │  Name & Title        │  │
│  │   Profile    │    │  Bio & Description   │  │
│  │   Image      │    │                      │  │
│  │              │    │  [Upload Photo]      │  │
│  │ [Upload]     │    │  [Download Resume]   │  │
│  └──────────────┘    │  [LinkedIn] [GitHub] │  │
│                      └──────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🎯 Interactive Elements

### Buttons

#### Primary Button (Upload/Download)
```
┌─────────────────────┐
│  📥 Download Resume │  ← Hover: Slightly darker
└─────────────────────┘
```

#### Secondary Button (Remove/Cancel)
```
┌─────────────────────┐
│  ✕ Remove           │  ← Hover: Border color change
└─────────────────────┘
```

#### Success Button (Save)
```
┌─────────────────────┐
│  ✓ Save Image       │  ← Hover: Brighter green
└─────────────────────┘
```

### Drag & Drop Area

#### Default State
```
┌─────────────────────────────┐
│  - - - - - - - - - - - - -  │
│ |                         | │
│ |    📤 Drag & drop       | │
│ |                         | │
│  - - - - - - - - - - - - -  │
└─────────────────────────────┘
```

#### Hover State
```
┌─────────────────────────────┐
│  ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═  │
│ ║                         ║ │
│ ║    📤 Drop here         ║ │
│ ║                         ║ │
│  ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═  │
└─────────────────────────────┘
```

### Tabs

#### Active Tab
```
┏━━━━━━━━━━━━━━━┓
┃ 📄 Active Tab ┃
┗━━━━━━━━━━━━━━━┛
```

#### Inactive Tab
```
┌───────────────┐
│ Inactive Tab  │
└───────────────┘
```

---

## 🎨 Color Scheme

### Light Mode
```
Background:     White / Gray-50
Text:           Gray-900
Primary:        Indigo-500
Secondary:      Cyan-500
Border:         Gray-200
Hover:          Gray-100
```

### Dark Mode
```
Background:     Gray-900 / Gray-950
Text:           Gray-50
Primary:        Indigo-400
Secondary:      Cyan-400
Border:         Gray-700
Hover:          Gray-800
```

---

## 🎬 Animations

### Modal Enter Animation
```
Frame 1:  Opacity: 0, Scale: 0.95
          ↓
Frame 2:  Opacity: 0.5, Scale: 0.97
          ↓
Frame 3:  Opacity: 1, Scale: 1
```

### Tab Switch Animation
```
Old Tab:  Opacity: 1 → 0 (fade out)
          ↓
New Tab:  Opacity: 0 → 1 (fade in)
          Y: 10px → 0 (slide up)
```

### Image Preview Animation
```
Initial:  Opacity: 0, Scale: 0.95
          ↓
Final:    Opacity: 1, Scale: 1
Duration: 300ms
```

---

## 📊 Layout Grid

### About Page Layout
```
┌─────────────────────────────────────────┐
│  Header (Navigation)                    │
├─────────────────────────────────────────┤
│  Quick Stats Banner                     │
├─────────────────────────────────────────┤
│  Hero Section                           │
│  ┌──────────┐  ┌──────────────────┐     │
│  │ Profile  │  │ Content & Buttons│     │
│  │ Image    │  │                  │     │
│  └──────────┘  └──────────────────┘     │
├─────────────────────────────────────────┤
│  Skills Section                         │
├─────────────────────────────────────────┤
│  Experience & Education                 │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

---

## 🎯 Key Visual Elements

### Icons Used
- 📤 Upload (Upload icon)
- 📥 Download (Download icon)
- 📄 File (FileText icon)
- 👁️ View (Eye icon)
- ✕ Close (X icon)
- ✓ Check (Check icon)
- 📷 Image (Image icon)

### Spacing
- Modal Padding: 24px
- Button Gap: 8px
- Section Gap: 48px
- Card Padding: 24px

### Border Radius
- Buttons: 8px
- Cards: 12px
- Modals: 16px
- Images: 16px

---

## ✅ Visual Checklist

### Image Upload:
- [x] Upload button visible
- [x] Modal opens smoothly
- [x] Drag area clearly marked
- [x] Hover states visible
- [x] Preview shows correctly
- [x] Buttons well-spaced
- [x] Success message clear

### Resume Preview:
- [x] Tabs clearly labeled
- [x] Active tab highlighted
- [x] PDF preview loads
- [x] Download button visible
- [x] Compare button accessible
- [x] Responsive on all sizes

---

**Visual guide complete! Your features look professional and polished!** 🎨
