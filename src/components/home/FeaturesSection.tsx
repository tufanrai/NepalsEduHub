import { motion } from "framer-motion";
import { Bot, Download, Brain, Target, Clock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Study Assistant",
    description:
      "Get instant help with your questions using our intelligent AI tutor that understands Nepali curriculum",
  },
  {
    icon: Download,
    title: "Offline Access",
    description:
      "Download notes and study materials to access them anytime, anywhere without internet",
  },
  {
    icon: Brain,
    title: "Smart Learning",
    description:
      "Personalized study recommendations based on your progress and learning patterns",
  },
  {
    icon: Target,
    title: "Exam Preparation",
    description:
      "Past papers, model questions, and targeted practice for board exams and university entrance",
  },
  {
    icon: Clock,
    title: "Progress Tracking",
    description:
      "Monitor your study goals, maintain streaks, and track your improvement over time",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to <span className="gradient-text">Excel</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for Nepali students to make
            learning effective and enjoyable
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
