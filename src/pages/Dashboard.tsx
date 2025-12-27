import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  Flame,
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle2,
  BookMarked,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const stats = [
  { label: "Notes Read", value: "24", icon: BookOpen, trend: "+5 this week" },
  { label: "Study Streak", value: "7 days", icon: Flame, trend: "Keep it up!" },
  { label: "Goals Completed", value: "12", icon: Target, trend: "3 pending" },
  { label: "Hours Studied", value: "45h", icon: Clock, trend: "+8h this week" },
];

const recentNotes = [
  { title: "Quadratic Equations", subject: "Mathematics", progress: 75 },
  { title: "Photosynthesis Process", subject: "Biology", progress: 100 },
  { title: "Nepal History", subject: "Social Studies", progress: 40 },
];

const upcomingExams = [
  { name: "Mathematics Unit Test", date: "Dec 15, 2025", daysLeft: 8 },
  { name: "Science Practical", date: "Dec 20, 2025", daysLeft: 13 },
  { name: "English Essay Writing", date: "Dec 22, 2025", daysLeft: 15 },
];

const dailyGoals = [
  { task: "Complete Physics Chapter 5", completed: true },
  { task: "Solve 10 math problems", completed: true },
  { task: "Review Chemistry notes", completed: false },
  { task: "Practice English writing", completed: false },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, Student! 👋
            </h1>
            <p className="text-muted-foreground">
              Track your progress and stay on top of your learning goals.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl border border-border/50 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      {stat.trend}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl border border-border/50 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <BookMarked className="w-5 h-5 text-primary" />
                    Continue Reading
                  </h2>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  {recentNotes.map((note) => (
                    <div
                      key={note.title}
                      className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-foreground">
                            {note.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {note.subject}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-primary">
                          {note.progress}%
                        </span>
                      </div>
                      <Progress value={note.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Daily Goals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-xl border border-border/50 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Today's Goals
                  </h2>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Goal
                  </Button>
                </div>

                <div className="space-y-3">
                  {dailyGoals.map((goal, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors cursor-pointer"
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          goal.completed
                            ? "bg-green-500/10 text-green-500"
                            : "bg-secondary"
                        }`}
                      >
                        {goal.completed && (
                          <CheckCircle2 className="w-4 h-4" />
                        )}
                      </div>
                      <span
                        className={`flex-1 ${
                          goal.completed
                            ? "text-muted-foreground line-through"
                            : "text-foreground"
                        }`}
                      >
                        {goal.task}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Upcoming Exams */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-xl border border-border/50 p-6"
              >
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-primary" />
                  Exam Countdown
                </h2>

                <div className="space-y-4">
                  {upcomingExams.map((exam) => (
                    <div
                      key={exam.name}
                      className="p-4 rounded-lg bg-secondary/30"
                    >
                      <h3 className="font-medium text-foreground mb-1">
                        {exam.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {exam.date}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">
                            {exam.daysLeft}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          days left
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-primary-foreground"
              >
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Button
                    variant="secondary"
                    className="w-full justify-start bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-0"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Browse Notes
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full justify-start bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-0"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Set New Goal
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
