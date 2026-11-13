export const profile = {
  name: 'Roulina Ravenska Sirait',
  role: 'Data Governance & Analytics | Data Enthusiast',
  intro:
    'Informatics graduate with experience in Data Governance, Master Data Management, and Project Management. Currently looking for new opportunities.',
  email: 'roulinaasirait@gmail.com',
  github: 'https://github.com/ravensname',
  linkedin: 'https://linkedin.com/in/roulina-ravenska-sirait',
}

// Put your CV at public/cv.pdf. BASE_URL keeps the link working on GitHub Pages.
export const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`

export const about = [
  "Informatics graduate with experience in Data Governance, Master Data Management, and Project Management. Skilled in data quality management, requirement validation, stakeholder coordination, and project monitoring to support efficient processes and data-driven decision-making.",
]

export const experience = [
  {
    period: 'Oct 2026 - Present',
    current: true,
    logo: `${import.meta.env.BASE_URL}logos/sinarmas.png`,
    title: 'Project Management Officer',
    company: 'Sinar Mas Land, BSD City',
    points: [
      'Monitor project progress, deliverables, and timelines for 40+ projects across multiple squads.',
      'Support the implementation of a Hybrid Agile project management approach to improve project planning, sprint execution, and progress monitoring.',
      'Develop and manage Azure DevOps Custom Project Plan to support sprint planning, task tracking, and project performance monitoring to management.',
    ],
  },
  {
    period: 'Sep 2025 - Present',
    current: true,
    logo: `${import.meta.env.BASE_URL}logos/sinarmas.png`,
    title: 'Master Data Management - Data Governance',
    company: 'Sinar Mas Land, BSD City',
    points: [
      'Developed automated data extraction and profiling notebook workflows to identify invalid SAP S/4HANA Business Partner (BP) master data against 30+ business rules and governance policies.',
      'Designed and maintained 3 Power BI dashboards and conducted monthly data quality scoring across 40+ validation rules, driving a 1% monthly improvement in data quality scores.',
      'Coordinated 30+ weekly validation emails with data administrators and implemented automated workflows, achieving over 95% on-time completion.',
      'Developed an internal web-based tracking application and analytical reports to monitor data remediation progress, centralize reporting, and support data-driven decisions.',
      'Develop and manage Azure DevOps Custom Project Plan to support sprint planning, task tracking, and project performance monitoring to management.',
    ],
  },
  {
    period: 'Jan 2025 - July 2025',
    logo: `${import.meta.env.BASE_URL}logos/sinarmas.png`,
    title: 'Moodle Developer Intern',
    company: 'PT. SMART Tbk, Central Jakarta',
    points: [
      'Developed 4+ LMS-integrated KPI dashboards using PHP, REST API, and React.JS to analyze learning usage across 5+ Business Units and support data-driven decisions.',
      'Performed re-validation after changes to ensure updates met functional requirements.',
      'Conducted post-implementation validation and supported UAT cycles to ensure alignment with business needs.',
      'Collected and analyzed user feedback to refine system reporting functionality.',
    ],
  },
  {
    period: 'Aug 2024 - Dec 2024',
    logo: `${import.meta.env.BASE_URL}logos/akebono.png`,
    title: 'IT Intern',
    company: 'PT. Akebono Brake Astra Indonesia, North Jakarta',
    points: [
      'Annotated and labeled 5,000+ image datasets (bounding boxes & object detection) using Roboflow, supporting 5 computer vision projects.',
      'Performed data cleaning and quality validation, reducing labeling errors by 30% and improving dataset consistency.',
      'Reviewed and corrected model predictions for YOLOv5, increasing object detection accuracy by 20%.',
      'Organized and structured datasets for vehicle plate detection, PPE compliance, worker identification, and product classification, accelerating model training process by 25%.',
      'Collaborated with cross-functional teams to meet 100% project deadlines within an 85% faster development timeline.',
    ],
  },
]

export const projects = [
  {
    title: 'Attendance Application',
    year: '2023/2024',
    description: 'Using Android studio, attendance application designed to help attendance processes in a class. It also aims to solve the problem of traditional attendance system and give a more meaningful experience for users.',
    tech: ['Java', 'Firebase', 'MySQL','Figma'],
    code: 'https://github.com/ravensname/Attendance-Application-using-Android-Studio',
  },
  {
    title: 'Speech Recognition using OpenAI',
    year: '2024',
    description: 'A speech recognition application using OpenAI and flask to help users find Information fast and accurately.',
    tech: ['Python', 'HTML', 'CSS', 'OpenAI', 'Flask'],
    code: 'https://github.com/ravensname/Speech-Recognition-Application-using-OpenAI',
  },
  {
    title: 'Image Processing',
    year: '2023/2024',
    description: 'This project demonstrates the use of MPI (Message Passing Interface) for parallel processing of images using Python. The script performs several image processing tasks, including blurring, scaling, and rotating, on a set of images.',
    tech: ['Python'],
    code: 'https://github.com/ravensname/Image-Processing',
  },
]

export const skills = {
  'Languages': ['Indonesian (Native)', 'English (Professional Working Proficiency)'],
  'Data & BI Tools': ['Power BI', 'SQL Server', 'Excel', 'PostgreSQL', 'MongoDB', 'Microsoft Fabric', 'Azure Database'],
  'Programming & Scripting': ['Python', 'SQL', 'PHP', 'JavaScript', 'HTML', 'CSS', 'C#', '.NET'],
  'Analytics Skills': ['Data Visualization', 'Dashboard Development', 'Reporting & Data Validation'],
  'Soft Skills': ['Analytical Thinking', 'Stakeholder Communication', 'Collaboration', 'Business Understanding', 'Problem-Solving'],
}