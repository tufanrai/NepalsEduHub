import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Filter,
  Search,
  Lightbulb,
  MessageSquare,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  "All Projects",
  "Education",
  "Healthcare",
  "Agriculture",
  "Infrastructure",
  "Environment",
];

const projects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description:
      "Designing sustainable water filtration systems for remote villages in Jumla district",
    location: "Jumla District",
    category: "Infrastructure",
    participants: 24,
    discussions: 45,
    status: "Active",
    urgency: "High",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Solar-Powered Learning Centers",
    description:
      "Creating solar-powered study spaces for students in areas without reliable electricity",
    location: "Mustang",
    category: "Education",
    participants: 18,
    discussions: 32,
    status: "Active",
    urgency: "Medium",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Digital Literacy Campaign",
    description:
      "Teaching basic computer skills and internet safety to rural communities",
    location: "Dolpa",
    category: "Education",
    participants: 32,
    discussions: 67,
    status: "Planning",
    urgency: "Medium",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Telemedicine Bridge",
    description:
      "Connecting remote villages with healthcare professionals through technology",
    location: "Humla",
    category: "Healthcare",
    participants: 15,
    discussions: 28,
    status: "Active",
    urgency: "High",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Sustainable Farming Practices",
    description:
      "Introducing modern, eco-friendly farming techniques to increase crop yields",
    location: "Sindhupalchok",
    category: "Agriculture",
    participants: 42,
    discussions: 89,
    status: "Active",
    urgency: "Low",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Mountain Cleanup Drive",
    description:
      "Organizing waste management and cleanup campaigns in mountain regions",
    location: "Solukhumbu",
    category: "Environment",
    participants: 56,
    discussions: 123,
    status: "Active",
    urgency: "Medium",
    image: "/placeholder.svg",
  },
];

const stats = [
  { label: "Active Projects", value: "25+", icon: Lightbulb },
  { label: "Student Volunteers", value: "500+", icon: Users },
  { label: "Communities Impacted", value: "30+", icon: Globe },
  { label: "Solutions Implemented", value: "12", icon: Trophy },
];

export default function GlobalHub() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                <span>Global Connection Hub</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Solve Real Problems,{" "}
                <span className="gradient-text">Make Real Impact</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join a community of passionate students working together to
                address challenges faced by rural Nepal. Your knowledge can
                create meaningful change.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-card rounded-xl border border-border/50 p-6 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
              {/* Search */}
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full h-10 pl-10 pr-4 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                />
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  {/* Header */}
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 p-4 flex items-start justify-between">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-md text-xs font-medium",
                        project.status === "Active"
                          ? "bg-green-500/10 text-green-600"
                          : "bg-yellow-500/10 text-yellow-600"
                      )}
                    >
                      {project.status}
                    </span>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-md text-xs font-medium",
                        project.urgency === "High"
                          ? "bg-red-500/10 text-red-600"
                          : project.urgency === "Medium"
                          ? "bg-orange-500/10 text-orange-600"
                          : "bg-blue-500/10 text-blue-600"
                      )}
                    >
                      {project.urgency} Priority
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-xs text-primary font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.participants}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {project.discussions}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-4 border-t border-border bg-secondary/30">
                    <Button variant="ghost" className="w-full group">
                      Join Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Have an Idea for a Project?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you've identified a problem in your community that needs
                solving, submit your proposal and find collaborators.
              </p>
              <Button size="lg">
                <Lightbulb className="w-5 h-5 mr-2" />
                Submit Project Idea
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
