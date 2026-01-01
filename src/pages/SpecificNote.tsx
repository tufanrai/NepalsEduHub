import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { article } from "@/lib/Contents";

const SpecificNote = () => {
  console.log(article.description.split("\n\n"));
  const arr = article.description.split("\n\n");

  arr.forEach((val) =>
    val.startsWith("## ") ? console.log(val) : console.log("normal text")
  );
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative h-[45vh] min-h-[350px]">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/picsum/200/200"
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
              <Link to="/notes">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Notes
              </Link>
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                {article.subject}
              </span>
              <span className="flex items-center gap-1.5 text-neutral-400 text-sm">
                <Clock className="w-4 h-4" />
                {article.read}
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
        <div className="container grid grid-cols-5 px-4 lg:px-8">
          {/* Social Links */}
          <div className="col-span-1 w-full flex items-start justify-end py-12">
            <ul className="sticky top-5 flex flex-col items-end justify-start gap-1">
              <li>
                <button className="p-3 font-regural text-xl text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 ease duration-200 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                  <Instagram />
                </button>
              </li>
              <li>
                <button className="p-3 font-regural text-xl text-white bg-red-400 ease duration-200 hover:bg-red-500">
                  <Youtube />
                </button>
              </li>
              <li>
                <button className="p-3 font-regural text-xl text-white bg-blue-400 ease duration-200 hover:bg-blue-500">
                  <Facebook />
                </button>
              </li>
            </ul>
          </div>

          {/* Notes details */}
          <div className="col-span-3 px-8 py-12">
            {/* Article Content */}
            <article
              style={{ whiteSpace: "pre-wrap" }}
              className="prose prose-lg max-w-none"
            >
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
                  const text = block.replace(/\*\*/g, "");
                  const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");

                  return (
                    <p
                      key={idx}
                      id={id}
                      className="text-foreground font-semibold mb-2"
                    >
                      {text}
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
                if (
                  !block.startsWith("## ") ||
                  !block.startsWith("**") ||
                  !block.startsWith("- ")
                ) {
                  return (
                    <p
                      key={idx}
                      className="text-muted-foreground mb-4 leading-relaxed"
                    >
                      {block}
                    </p>
                  );
                }
              })}
            </article>
          </div>

          {/* Youtube video links  and quick navs */}
          <div className="col-span-1 h-screen">
            <div className="sticky top-5 flex flex-col items-start justify-start gap-8">
              {/* Quick navigation to sub-topics */}
              <ul className="sticky top-5 flex flex-col items-start justify-start gap-1">
                <li>
                  <h2 className="text-md font-bold text-foreground">
                    Quick navs
                  </h2>
                </li>
                {article.description.split("\n\n").map((subTopic, idx) =>
                  subTopic.startsWith("**") && subTopic.includes(":**") ? (
                    <li
                      className="cursor-pointer ease duration-300 font-regural text-md text-muted-foreground hover:text-foreground"
                      key={idx}
                    >
                      <a
                        href={`#${subTopic
                          .replace(/\*\*\:/g, "")
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "")}`}
                      >
                        {subTopic.replace(/\*\*/g, "")}
                      </a>
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>

              {/* YouTube video section */}
              <iframe
                className="mt-8"
                src="https://www.youtube.com/embed/ttpO7wNqFv8?si=jXNXn8GT9l9kMIcY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpecificNote;
