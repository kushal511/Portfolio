# 🚀 Quick Start Guide - Image Upload & Resume Preview

## ✨ What's New

Your portfolio now has **two powerful features**:

1. **📸 Image Upload** - Upload any image from your system with drag-and-drop
2. **📄 Resume Preview** - Preview both resumes side-by-side with tabs

---

## 🎯 Quick Setup (3 Steps)

### Step 1: Add Your Resume PDFs

```bash
cd /Users/mac_kushal/Desktop/Portfolio/portfolio-app/public

# Copy your resumes and rename them:
# - resume_alt.pdf (Software Engineering Resume)
# - resume_primary.pdf (AI/ML Resume)
```

**Don't have PDFs ready?** See `SETUP_RESUMES.md` for placeholder options.

### Step 2: Start Development Server

```bash
cd /Users/mac_kushal/Desktop/Portfolio/portfolio-app
npm run dev
```

### Step 3: Test the Features

Open **http://localhost:3000/about** and test:

1. **Image Upload**:
   - Click "Upload Photo" button (bottom-right of profile image)
   - Drag & drop an image OR click to browse
   - Preview and save
   - Watch your profile photo update!

2. **Resume Preview**:
   - Click "Download Resume" button
   - Switch between "Software Engineering" and "AI/ML" tabs
   - Preview PDFs in the modal
   - Download or compare both resumes

---

## 📁 Required File Structure

```
portfolio-app/
└── public/
    ├── resume_alt.pdf       ← Software Engineering Resume (REQUIRED)
    ├── resume_primary.pdf   ← AI/ML Resume (REQUIRED)
    └── profile.jpg          ← Profile image (optional - can upload via UI)
```

---

## 🎨 Features Overview

### Image Upload
- ✅ Drag & drop support
- ✅ File browser (click to select)
- ✅ Image validation (JPG, PNG, WebP)
- ✅ Max file size: 5MB
- ✅ Live preview before saving
- ✅ Beautiful animations

### Resume Preview
- ✅ Tabbed interface (2 resumes)
- ✅ Full PDF preview in browser
- ✅ Individual download buttons
- ✅ "Compare Both Resumes Side-by-Side" button
- ✅ Responsive on all devices

---

## 🎬 Demo Flow

### Upload an Image:
```
1. Navigate to /about page
2. Click "Upload Photo" button
3. Drag image onto upload area (or click to browse)
4. See preview of your image
5. Click "Save Image"
6. Profile photo updates instantly!
```

### Preview Resumes:
```
1. Click "Download Resume" button
2. See modal with 2 tabs:
   - Software Engineering Resume
   - AI/ML Resume
3. Switch tabs to preview each resume
4. Click "Download" to save a resume
5. Click "Compare Both Resumes" to open both in new tabs
```

---

## 📝 Files Created

### New Components:
1. **`/components/ImageUploadModal.tsx`**
   - Handles image upload with drag-and-drop
   - File validation and preview
   - Beautiful UI with animations

2. **`/components/ResumeModal.tsx`** (Enhanced)
   - Tabbed interface for 2 resumes
   - PDF preview with `<object>` tag
   - Download and comparison features

### Updated Files:
1. **`/app/about/page.tsx`**
   - Integrated ImageUploadModal
   - Added state for profile image
   - Upload button on profile section

### Documentation:
1. **`IMAGE_UPLOAD_AND_RESUME_PREVIEW.md`** - Comprehensive guide
2. **`SETUP_RESUMES.md`** - Resume setup instructions
3. **`FEATURE_SUMMARY.md`** - Feature overview
4. **`QUICK_START_GUIDE.md`** - This file

---

## 🔧 Customization

### Change Resume Names/Descriptions

Edit `/components/ResumeModal.tsx`:

```typescript
const resumes = [
  {
    id: 'software',
    name: 'Software Engineering Resume',  // ← Change this
    description: 'Full-stack development...', // ← Change this
    file: '/resume_alt.pdf',
  },
  {
    id: 'aiml',
    name: 'AI/ML Resume',  // ← Change this
    description: 'Machine learning...', // ← Change this
    file: '/resume_primary.pdf',
  },
];
```

### Change Image Upload Limits

Edit `/components/ImageUploadModal.tsx`:

```typescript
// Change max file size (currently 5MB)
if (file.size > 5 * 1024 * 1024) {
  alert('File size must be less than 5MB');
  return;
}

// Change accepted file types
<input
  type="file"
  accept="image/*"  // ← Modify this
/>
```

---

## 🧪 Testing Checklist

### Image Upload:
- [ ] Upload JPG image ✓
- [ ] Upload PNG image ✓
- [ ] Upload WebP image ✓
- [ ] Drag & drop works ✓
- [ ] File browser works ✓
- [ ] Invalid file type rejected ✓
- [ ] Large file (>5MB) rejected ✓
- [ ] Preview shows correctly ✓
- [ ] Remove and re-upload works ✓
- [ ] Profile photo updates ✓

### Resume Preview:
- [ ] Modal opens ✓
- [ ] Both tabs visible ✓
- [ ] Tab switching works ✓
- [ ] PDF preview loads ✓
- [ ] Download buttons work ✓
- [ ] "Compare Both" opens new tabs ✓
- [ ] Responsive on mobile ✓
- [ ] Works on different browsers ✓

---

## 🐛 Troubleshooting

### Image Upload Issues

**Problem**: Can't upload image
- ✓ Check file is an image (JPG, PNG, WebP)
- ✓ Check file size < 5MB
- ✓ Try different browser
- ✓ Check browser console for errors

**Problem**: Preview not showing
- ✓ Clear browser cache
- ✓ Try hard refresh (Cmd+Shift+R)
- ✓ Check browser compatibility

### Resume Preview Issues

**Problem**: PDFs not loading
- ✓ Verify files exist in `/public` folder
- ✓ Check file names are exactly:
  - `resume_alt.pdf`
  - `resume_primary.pdf`
- ✓ Try different browser
- ✓ Check browser PDF support

**Problem**: Download not working
- ✓ Check browser download permissions
- ✓ Verify file paths are correct
- ✓ Try different browser

---

## 💡 Pro Tips

### For Best Results:

1. **Images**:
   - Use high-quality photos (800x800px or larger)
   - Square aspect ratio works best
   - Keep file size under 2MB for faster loading
   - Use professional headshot

2. **Resumes**:
   - Keep PDFs under 2MB
   - Use standard PDF format
   - Test preview in multiple browsers
   - Ensure text is selectable (not scanned images)

3. **Testing**:
   - Test on Chrome, Safari, Firefox
   - Test on mobile devices
   - Test on different screen sizes
   - Verify downloads work

---

## 📱 Browser Compatibility

### Fully Supported:
- ✅ Chrome 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Edge 90+

### Partial Support:
- ⚠️ Older browsers may not show PDF preview
- ⚠️ Fallback download button provided

---

## 🎯 Next Steps

### Immediate:
1. ✅ Add your resume PDFs to `/public` folder
2. ✅ Start dev server: `npm run dev`
3. ✅ Test image upload at http://localhost:3000/about
4. ✅ Test resume preview

### Optional:
- [ ] Customize resume names/descriptions
- [ ] Add more resume versions
- [ ] Adjust image size limits
- [ ] Add analytics tracking
- [ ] Deploy to production

---

## 📚 Additional Resources

### Documentation Files:
- **IMAGE_UPLOAD_AND_RESUME_PREVIEW.md** - Full technical documentation
- **SETUP_RESUMES.md** - Detailed resume setup guide
- **FEATURE_SUMMARY.md** - Complete feature overview

### Code Files:
- `/components/ImageUploadModal.tsx` - Image upload component
- `/components/ResumeModal.tsx` - Resume preview component
- `/app/about/page.tsx` - About page with integrations

---

## ✅ Success!

You now have:
- ✅ **Image upload** from your system
- ✅ **Drag & drop** functionality
- ✅ **Resume preview** with tabs
- ✅ **Side-by-side comparison**
- ✅ **Professional UI/UX**
- ✅ **Full documentation**

---

## 🚀 Ready to Launch

Your portfolio is now ready with these new features!

**Start the server and test it out:**
```bash
npm run dev
```

**Then visit:**
- http://localhost:3000/about

**Enjoy your enhanced portfolio!** 🎉
