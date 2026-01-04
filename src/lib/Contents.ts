// Levels filter
export const levels = [
  { id: "all", name: "All Levels" },
  { id: "grade-8", name: "Grade 8" },
  { id: "grade-10", name: "Grade 10" },
  { id: "plus-2", name: "+2 Level" },
  { id: "university", name: "University" },
];

// Subjects
export const subjects = [
  "All Subjects",
  "Mathematics",
  "Science",
  "English",
  "Nepali",
  "Social Studies",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
];

// Dumy notes list
export const notes = [
  {
    id: 1,
    title: "Introduction to Algebra",
    subject: "Mathematics",
    level: "Grade 8",
    views: 1234,
    downloads: 567,
    duration: "15 min read",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Newton's Laws of Motion",
    subject: "Physics",
    level: "Grade 10",
    views: 2341,
    downloads: 890,
    duration: "20 min read",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Organic Chemistry Basics",
    subject: "Chemistry",
    level: "+2 Level",
    views: 1876,
    downloads: 654,
    duration: "25 min read",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Cell Biology & Genetics",
    subject: "Biology",
    level: "University",
    views: 3210,
    downloads: 1234,
    duration: "30 min read",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 5,
    title: "English Grammar Essentials",
    subject: "English",
    level: "Grade 8",
    views: 987,
    downloads: 432,
    duration: "12 min read",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Nepali Literature Analysis",
    subject: "Nepali",
    level: "Grade 10",
    views: 1543,
    downloads: 765,
    duration: "18 min read",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Data Structures in C++",
    subject: "Computer Science",
    level: "University",
    views: 4321,
    downloads: 1987,
    duration: "35 min read",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 8,
    title: "Trigonometry Complete Guide",
    subject: "Mathematics",
    level: "+2 Level",
    views: 2765,
    downloads: 1123,
    duration: "28 min read",
    thumbnail: "/placeholder.svg",
  },
];

interface IArticles {
  subject: string;
  read: string;
  title: string;
  description: string;
}

// Note's details
export const article: IArticles = {
  subject: "Physics",
  read: "15 min",
  title: "Introduction to Algorithm",
  description: `## Main title

**Lorem ipsum** dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

**List example:** 

- **Bold:** This is list no.1
- **Bold2:** This is list **no.2:**
- This is list **no.3

1. This is ordered list
2. This is unordered list
3. **Bold:** This is ordered list **no.3:**

Lorem ipsum dolor sit amet **consectetur:** adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

**End of the note:**

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

`,
};
