import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Bot, Sparkles, BookOpen, Send, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { P } from "node_modules/framer-motion/dist/types.d-DagZKalS";

const suggestedQuestions = [
  "Explain Newton's Laws of Motion",
  "How do I solve quadratic equations?",
  "What is photosynthesis?",
  "Help me understand the Nepali constitution",
];

const api_key = import.meta.env.VITE_API_KEY ?? "";

export default function AIAssistant() {
  const [message, setMessage] = useState<string>("");
  const [reply, setReply] = useState<any | undefined>(undefined);
  const [showSuggestion, setShowSuggestion] = useState<boolean>(true);

  console.log(reply);
  async function FetchResult() {
    try {
      // First API call with reasoning
      let response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${api_key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "xiaomi/mimo-v2-flash:free",
            messages: [
              {
                role: "user",
                content: message,
              },
            ],
            reasoning: { enabled: true },
          }),
        }
      );

      // Extract the assistant message with reasoning_details and save it to the response variable
      const result = await response.json();
      response = result.choices[0].message.content;
      setReply(response);
    } catch (err) {
      return err;
    }
  }

  const askAI = () => {
    FetchResult();
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-6rem)] flex flex-col">
        {/* Header */}
        <section className="py-12 bg-gradient-to-b from-secondary/50 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Learning</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              AI Study Assistant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Get instant help with your studies. Ask questions, get
              explanations, and learn concepts tailored to the Nepali
              curriculum.
            </motion.p>
          </div>
        </section>

        {/* Chat Area */}
        <section className="flex-1 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden"
            >
              {/* Chat Messages Area */}
              <div className="h-[400px] p-6 overflow-y-auto">
                {/* Welcome Message */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-2">
                      AI Assistant
                    </p>
                    <div
                      style={{ whiteSpace: "pre-wrap" }}
                      className="bg-secondary/50 rounded-xl rounded-tl-none p-4"
                    >
                      {reply && typeof reply !== undefined ? (
                        <>
                          {reply.split("\n\n").map((block, idx) => {
                            if (block.startsWith("###")) {
                              return (
                                <h2
                                  key={idx}
                                  className="text-xl font-bold text-foreground mt-8 mb-4"
                                >
                                  {block.replace("###", "")}
                                </h2>
                              );
                            }

                            if (
                              block.startsWith("**") &&
                              block.includes(":**")
                            ) {
                              return (
                                <p
                                  key={idx}
                                  className="text-foreground font-semibold mb-2"
                                >
                                  {block.replace(/\*\*/g, "")}
                                </p>
                              );
                            }

                            if (
                              (!block.startsWith("**") &&
                                !block.includes(":**")) ||
                              !block.startsWith("###") ||
                              !block.startsWith("*")
                            ) {
                              return (
                                <p
                                  key={idx}
                                  className="text-foreground font-regural mb-2"
                                >
                                  {block}
                                </p>
                              );
                            }
                            if (block.startsWith("* ")) {
                              const items = block.split("\n");
                              return (
                                <ul
                                  key={idx}
                                  className="list-disc list-inside space-y-2 text-muted-foreground mb-4"
                                >
                                  {items.map((item, i) => (
                                    <li key={i}>{item.replace("* ", "")}</li>
                                  ))}
                                </ul>
                              );
                            }

                            if (block.match(/^\d\./)) {
                              const items = block.split("\n");
                              return (
                                <ol
                                  key={idx}
                                  className="list-decimal list-inside space-y-2 text-muted-foreground mb-4"
                                >
                                  {items.map((item, i) => (
                                    <li key={i}>
                                      {item.replace(/^\d\.\s/, "")}
                                    </li>
                                  ))}
                                </ol>
                              );
                            }
                          })}
                        </>
                      ) : (
                        <>
                          <p className="text-foreground mb-4">
                            नमस्ते! 👋 I'm your AI Study Assistant. I'm here to
                            help you with:
                          </p>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <BookOpen className="w-4 h-4 mt-1 text-primary" />
                              <span>
                                Explaining concepts from your syllabus
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 mt-1 text-primary" />
                              <span>
                                Solving practice problems step by step
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Sparkles className="w-4 h-4 mt-1 text-primary" />
                              <span>
                                Providing study tips and exam strategies
                              </span>
                            </li>
                          </ul>
                          <p className="text-foreground mt-4">
                            What would you like to learn today?
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggested Questions */}
              <div className="px-6 py-4 border-t border-border bg-secondary/30">
                <p className="text-sm text-muted-foreground mb-3">
                  Try asking:
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => setMessage(question)}
                      className="px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    placeholder="Ask anything about your studies..."
                    className="flex-1 h-12 px-4 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                  />
                  <Button onClick={askAI} size="lg" className="h-12 px-6">
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  AI responses are for educational purposes. Always verify
                  important information with your teachers.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
