import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe, Users, Lightbulb, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    title: "Clean Water Access",
    location: "Jumla District",
    participants: 24,
    status: "Active",
  },
  {
    title: "Solar Education Initiative",
    location: "Mustang",
    participants: 18,
    status: "Active",
  },
  {
    title: "Digital Literacy Campaign",
    location: "Dolpa",
    participants: 32,
    status: "Planning",
  },
];

export function CommunitySection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              <span>Global Connection Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Solve Real Problems,{" "}
              <span className="gradient-text">Make Real Impact</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join a community of passionate students working together to address 
              challenges faced by rural Nepal. Apply your knowledge to create 
              meaningful change in communities that need it most.
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">25+</p>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                </div>
              </div>
            </div>

            <Button size="lg" onClick={() => navigate("/global-hub")}>
              Join the Community
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right Content - Problem Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {problem.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{problem.location}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {problem.participants} participants
                          </span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            problem.status === "Active"
                              ? "bg-green-500/10 text-green-600"
                              : "bg-yellow-500/10 text-yellow-600"
                          }`}
                        >
                          {problem.status}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
