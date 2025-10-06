export type Course = {
  code: string;
  name: string;
  credits?: number;
  grade?: string;
  semester?: string;
};

export type Education = {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  graduationDate: string;
  courses: Course[];
  highlights: string[];
  icon: string;
  gradient: string;
};

export const education: Education[] = [
  {
    degree: 'Master of Science',
    major: 'Data Science (Specialization in Data Engineering)',
    institution: 'San Jose State University',
    location: 'California, USA',
    period: 'August 2024 - Present',
    gpa: '3.5/4.0',
    graduationDate: 'Expected May 2026',
    icon: '🎓',
    gradient: 'from-blue-500 via-indigo-600 to-purple-700',
    highlights: [
      'Specialization in Data Engineering',
      'Focus on Big Data, Machine Learning, and Distributed Systems',
      'Advanced coursework in Business Intelligence and Data Visualization'
    ],
    courses: [
      { code: 'DATA 236', name: 'Data Warehouse and Pipeline', credits: 3 },
      { code: 'MATH 261', name: 'Mathematics for Data Analytics', credits: 3 },
      { code: 'DATA 220', name: 'Business Intelligence and Data Visualization', credits: 3 },
      { code: 'DATA 245', name: 'Machine Learning', credits: 3 },
      { code: 'DATA 250', name: 'Big Data', credits: 3 },
      { code: 'DATA 255', name: 'Distributed Systems for Data Engineering', credits: 3 },
    ]
  },
  {
    degree: 'Bachelor of Technology',
    major: 'Computer Science',
    institution: 'Indus Institute of Technology & Engineering',
    location: 'Gujarat, India',
    period: 'June 2019 - May 2023',
    gpa: '4.0/4.0',
    graduationDate: 'May 2023',
    icon: '🎓',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    highlights: [
      'Perfect 4.0 GPA',
      'Comprehensive Computer Science curriculum',
      'Strong foundation in algorithms, data structures, and software engineering'
    ],
    courses: [
      { code: 'CS 301', name: 'Database Management System' },
      { code: 'CS 201', name: 'Python' },
      { code: 'CS 302', name: 'Data Preparation & Analysis' },
      { code: 'CS 401', name: 'Data Science' },
      { code: 'CS 402', name: 'Machine Learning' },
      { code: 'CS 403', name: 'Soft Computing' },
      { code: 'CS 202', name: 'Data Structures & Algorithms' },
    ]
  }
];

export const getEducationByInstitution = (institution: string): Education | undefined => {
  return education.find(e => e.institution === institution);
};

export const getAllCourses = (): Course[] => {
  return education.flatMap(e => e.courses);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return getAllCourses().filter(course => 
    course.name.toLowerCase().includes(category.toLowerCase())
  );
};
