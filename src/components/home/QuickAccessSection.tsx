import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Award,
  Building2,
  ArrowRight,
} from "lucide-react";

const levels = [
  {
    id: "Grade 8",
    name: "Grade 8",
    description:
      "Foundation building with comprehensive notes for all subjects",
    icon: BookOpen,
    subjects: 12,
    notes: 150,
    color: "from-blue-500/20 to-blue-600/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    id: "Grade 10",
    name: "Grade 10 (SEE)",
    description: "Board exam preparation with past papers and solutions",
    icon: GraduationCap,
    subjects: 14,
    notes: 280,
    color: "from-green-500/20 to-green-600/20",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    id: "+2 level",
    name: "+2 Level",
    description:
      "Advanced curriculum covering Science, Management & Humanities",
    icon: Award,
    subjects: 10,
    notes: 320,
    color: "from-purple-500/20 to-purple-600/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    id: "University",
    name: "University",
    description: "Bachelor's level resources from TU, KU, PU and more",
    icon: Building2,
    subjects: 25,
    notes: 400,
    color: "from-orange-500/20 to-orange-600/20",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
];

export function QuickAccessSection() {
  const navigate = useNavigate();

  const setLevel = (level: string) => {
    sessionStorage.setItem("level", level);
    navigate("/notes");
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your Level
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access quality educational resources tailored for every academic
            level in Nepal
          </p>
        </motion.div>

        {/* Level Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setLevel(level.id)}
                className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border border-border/50"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${level.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-7 h-7 ${level.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {level.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 line-clamp-2">
                    {level.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-5">
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        {level.subjects}
                      </p>
                      <p className="text-xs text-muted-foreground">Subjects</p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        {level.notes}+
                      </p>
                      <p className="text-xs text-muted-foreground">Notes</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Explore Notes</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
