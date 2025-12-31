import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

interface IArticles {
  category: string;
  date: string;
  title: string;
  description: string;
}

const article: IArticles = {
  category: "Hello",
  date: "2025-03-15",
  title: "Title",
  description: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

`,
};

const SpecificNote = () => {
  const { id } = useParams();
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative h-[45vh] min-h-[350px]">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt={"thumbnail"}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="mb-4 text-neutral-400 hover:text-white hover:bg-neutral-100/20"
            >
              <Link to="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-neutral-400 text-sm">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-300 leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl ml-auto">
            <Button>
              <Instagram />
            </Button>
            <Button>
              <Youtube />
            </Button>
            <Button>
              <Facebook />
            </Button>
          </div>
          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {article.description.split("\n\n").map((block, idx) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={idx}
                      className="text-xl font-bold text-foreground mt-8 mb-4"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("**") && block.includes(":**")) {
                  return (
                    <p key={idx} className="text-foreground font-semibold mb-2">
                      {block.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (block.startsWith("- ")) {
                  const items = block.split("\n");
                  return (
                    <ul
                      key={idx}
                      className="list-disc list-inside space-y-2 text-muted-foreground mb-4"
                    >
                      {items.map((item, i) => (
                        <li key={i}>{item.replace("- ", "")}</li>
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
                        <li key={i}>{item.replace(/^\d\.\s/, "")}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p
                    key={idx}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {block}
                  </p>
                );
              })}
            </article>

            {/* Related Articles
            {relatedArticle && relatedArticle !== null ? (
              <>
                {relatedArticle.length > 0 && (
                  <div className="mt-16 pt-12 border-t border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      Related News
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {relatedArticle.map((item) => (
                        <Link
                          key={item._id}
                          to={`/news/${item._id}`}
                          className="group flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                        >
                          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <img
                              src={item.url}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs text-accent font-medium">
                              {item.category}
                            </span>
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mt-1">
                              {item.title}
                            </h4>
                            <span className="text-xs text-muted-foreground mt-2 block">
                              {item.date}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpecificNote;
