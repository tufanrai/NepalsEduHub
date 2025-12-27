import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Download,
  Bookmark,
  BookOpen,
  Clock,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

const levels = [
  { id: "all", name: "All Levels" },
  { id: "grade-8", name: "Grade 8" },
  { id: "grade-10", name: "Grade 10" },
  { id: "plus-2", name: "+2 Level" },
  { id: "university", name: "University" },
];

const subjects = [
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

const notes = [
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

export default function Notes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-b from-secondary/50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Notes Library
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access thousands of study materials organized by level and subject
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search notes by title, subject, or topic..."
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-card border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters & Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
              {/* Level Tabs */}
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                      selectedLevel === level.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {level.name}
                  </button>
                ))}
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-4">
                {/* Subject Filter */}
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="h-10 px-4 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>

                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-2 rounded-md transition-all",
                      viewMode === "grid"
                        ? "bg-card shadow-sm"
                        : "hover:bg-card/50"
                    )}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "p-2 rounded-md transition-all",
                      viewMode === "list"
                        ? "bg-card shadow-sm"
                        : "hover:bg-card/50"
                    )}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Notes Grid/List */}
            <div
              className={cn(
                "gap-6",
                viewMode === "grid"
                  ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "flex flex-col"
              )}
            >
              {notes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer",
                    viewMode === "list" && "flex"
                  )}
                >
                  {/* Thumbnail */}
                  <div
                    className={cn(
                      "relative bg-secondary",
                      viewMode === "grid" ? "h-40" : "w-48 h-32 flex-shrink-0"
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-muted-foreground/30" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 rounded-md bg-primary/90 text-primary-foreground text-xs font-medium">
                        {note.level}
                      </span>
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className={cn("p-5", viewMode === "list" && "flex-1")}>
                    <span className="text-xs text-primary font-medium">
                      {note.subject}
                    </span>
                    <h3 className="font-semibold text-foreground mt-1 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {note.title}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {note.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3.5 h-3.5" />
                        {note.downloads}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {note.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Notes
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
