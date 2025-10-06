# 📄 Setup Your Resumes

## Quick Setup Guide

### Option 1: Add Your Existing Resumes

If you already have your resume PDFs:

```bash
cd /Users/mac_kushal/Desktop/Portfolio/portfolio-app/public

# Copy your Software Engineering resume
cp /path/to/your/software-resume.pdf resume_alt.pdf

# Copy your AI/ML resume
cp /path/to/your/aiml-resume.pdf resume_primary.pdf
```

### Option 2: Create Placeholder PDFs

If you don't have PDFs yet, you can create placeholders:

**On macOS:**

1. Open TextEdit
2. Create a new document
3. Type: "Software Engineering Resume - Kushal Adhyaru"
4. File → Export as PDF → Save as `resume_alt.pdf`
5. Repeat for AI/ML resume → Save as `resume_primary.pdf`
6. Move both PDFs to `/Users/mac_kushal/Desktop/Portfolio/portfolio-app/public/`

**Using Command Line (macOS):**

```bash
cd /Users/mac_kushal/Desktop/Portfolio/portfolio-app/public

# Create placeholder for Software Engineering Resume
echo "Software Engineering Resume - Kushal Adhyaru" | textutil -stdin -output resume_alt.pdf -format txt -convert pdf

# Create placeholder for AI/ML Resume
echo "AI/ML Resume - Kushal Adhyaru" | textutil -stdin -output resume_primary.pdf -format txt -convert pdf
```

### Option 3: Use Online Resume Builder

1. Go to [Canva](https://www.canva.com/resumes/templates/) or [Resume.io](https://resume.io/)
2. Create your Software Engineering resume
3. Download as PDF → Rename to `resume_alt.pdf`
4. Create your AI/ML resume
5. Download as PDF → Rename to `resume_primary.pdf`
6. Move both to `/Users/mac_kushal/Desktop/Portfolio/portfolio-app/public/`

---

## File Naming Convention

**Important**: The file names must match exactly:

```
public/
├── resume_alt.pdf       ← Software Engineering Resume
└── resume_primary.pdf   ← AI/ML Resume
```

---

## Verify Setup

After adding your resumes, verify they're in the right place:

```bash
cd /Users/mac_kushal/Desktop/Portfolio/portfolio-app/public
ls -la *.pdf
```

You should see:
```
resume_alt.pdf
resume_primary.pdf
```

---

## Test the Feature

1. Start your development server:
```bash
npm run dev
```

2. Open http://localhost:3000/about

3. Click "Download Resume" button

4. You should see:
   - Two tabs: "Software Engineering Resume" and "AI/ML Resume"
   - PDF preview for each resume
   - Download buttons
   - "Compare Both Resumes Side-by-Side" button

---

## Customization

If you want to change the resume names or descriptions, edit:

`/components/ResumeModal.tsx`

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

---

## Tips

1. **File Size**: Keep PDFs under 2MB for faster loading
2. **Format**: Use standard PDF format (not PDF/A)
3. **Naming**: Don't change the file names unless you update the code
4. **Testing**: Test in multiple browsers (Chrome, Safari, Firefox)

---

**Ready to go!** 🚀
