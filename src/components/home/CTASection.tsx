import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl [background:var(--gradient-hero)] p-10 sm:p-16 text-center"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

          <div className="relative">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Learning Today</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
              Ready to Transform Your Academic Journey?
            </h2>

            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Join thousands of Nepali students already using Sajilo Veda to
              achieve their academic goals. It's completely free to get started.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                variant="heroOutline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
                onClick={() => navigate("/notes")}
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="xl"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
