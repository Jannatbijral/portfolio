import { Project, Certification, Skill, Achievement, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Digital Clock',
    description: 'A command-line digital clock implemented using Linux Shell Scripting that displays accurate time and date in a user-friendly format.',
    technologies: ['Linux', 'Shell Scripting', 'Bash'],
    image: 'https://images.pexels.com/photos/1009355/pexels-photo-1009355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubLink: 'https://github.com/jannatbijral/digital-clock',
  },
  {
    id: 2,
    title: 'System Resource Monitoring Script',
    description: 'A Linux Shell script that monitors and reports system resources such as CPU, memory, and disk usage in real-time.',
    technologies: ['Linux', 'Shell Scripting', 'System Administration'],
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubLink: 'https://github.com/jannatbijral/system-monitor',
  },
  {
    id: 3,
    title: 'AI Loan Prediction System',
    description: 'A machine learning model built in Python that predicts loan approval probability based on applicant data and financial history.',
    technologies: ['Python', 'Colab', 'VS Code', 'Machine Learning'],
    image: 'https://images.pexels.com/photos/7567555/pexels-photo-7567555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubLink: 'https://github.com/jannatbijral/loan-prediction',
  },
  {
    id: 4,
    title: 'Restaurant Webpage',
    description: 'A responsive restaurant website featuring menu items, reservation system, and contact information with modern UI design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubLink: 'https://github.com/jannatbijral/restaurant-page',
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Red Hat Linux System Administration',
    issuer: 'Red Hat Academy',
    date: 'March 2023',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Ethical Hacking Essentials',
    issuer: 'EC Council',
    date: 'June 2023',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Digital Forensics Essentials',
    issuer: 'EC Council',
    date: 'September 2023',
    image: 'https://images.pexels.com/photos/2882553/pexels-photo-2882553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const skills: Skill[] = [
  { name: 'C++', level: 85, category: 'language' },
  { name: 'Java', level: 70, category: 'language' },
  { name: 'Linux', level: 90, category: 'language' },
  { name: 'Git', level: 75, category: 'tool' },
  { name: 'GitHub', level: 80, category: 'tool' },
  { name: 'Kali Linux', level: 85, category: 'tool' },
  { name: 'MySQL', level: 70, category: 'tool' },
  { name: 'DSA', level: 75, category: 'skill' },
  { name: 'Nmap', level: 85, category: 'skill' },
  { name: 'Wireshark', level: 80, category: 'skill' },
  { name: 'Metasploit', level: 75, category: 'skill' },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Capture the Flag - 3rd Position',
    description: 'Secured 3rd position in the university-level Capture the Flag competition, demonstrating advanced cybersecurity skills.',
    date: 'November 2023',
  },
];