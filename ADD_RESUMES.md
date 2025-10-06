# 📄 Add Your Resume PDFs

## ⚠️ Missing Files

Your resume PDFs are not in the public folder yet. The preview will work once you add them!

## 📁 Required Files

You need to add **2 PDF files** to the `public` folder:

1. **`resume_alt.pdf`** - Software Engineering Resume
2. **`resume_primary.pdf`** - AI/ML Resume

## 🚀 How to Add Them

### Option 1: Copy from Desktop (if they're there)
```bash
cd /Users/mac_kushal/Desktop/Portfolio/portfolio-app
cp /Users/mac_kushal/Desktop/resume_alt.pdf public/
cp /Users/mac_kushal/Desktop/resume_primary.pdf public/
```

### Option 2: Manual Copy
1. Open Finder
2. Navigate to your resumes
3. Copy both PDF files
4. Paste them into: `/Users/mac_kushal/Desktop/Portfolio/portfolio-app/public/`

### Option 3: Rename Your Existing Resumes
If you have different names, rename them:
- Your Software Engineering resume → `resume_alt.pdf`
- Your AI/ML resume → `resume_primary.pdf`

## ✅ Expected File Structure

```
portfolio-app/
└── public/
    ├── resume_alt.pdf      ← Software Engineering Resume
    └── resume_primary.pdf  ← AI/ML Resume
```

## 🎯 How It Works

When users click "Download Resume":
1. Modal opens with 2 options
2. Click "Software Engineering Resume" → Shows `resume_alt.pdf` preview
3. Click "AI/ML Resume" → Shows `resume_primary.pdf` preview
4. Users can preview in browser OR download

## 🔍 Preview Features

- ✅ In-browser PDF preview (if browser supports it)
- ✅ Download button
- ✅ Back button to switch between resumes
- ✅ Responsive modal

## 📝 After Adding Files

Once you add the PDFs:
1. Refresh your browser
2. Click "Download Resume" button
3. Select either resume option
4. You'll see the PDF preview!

## 💡 Tips

- Keep file sizes reasonable (< 2MB recommended)
- Make sure PDFs are not password-protected
- Test the preview in different browsers
- Both files should be in the `public` folder root (not in a subfolder)

## 🚨 Current Status

**Files Missing**: Both resume PDFs need to be added to the `public` folder.

Once added, the preview will work automatically! 🎉
