import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { article } from "@/lib/Contents";
import { b, P } from "node_modules/framer-motion/dist/types.d-DagZKalS";

const SpecificNote = () => {
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
      <section className="bg-white">
        <div className="container grid grid-cols-6 px-4 lg:px-8">
          {/* Social Links */}
          <div className="col-span-1 w-full flex items-start justify-end py-12 h-screen">
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
          <div className="col-span-3 px-8 pb-12">
            {/* Article Content */}
            <article
              style={{ whiteSpace: "pre-wrap" }}
              className="prose prose-lg max-w-none"
            >
              {article.description.split("\n\n").map((block, idx) => {
                // Sub-heading
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={idx}
                      id={block
                        .replace("## ", "")
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")}
                      className="text-xl font-bold text-foreground mt-8 mb-4 cursor-pointer ease duration-300 relative after:content-['#'] after:hidden hover:after:inline hover:after:italic hover:after:text-blue-500/50 hover:after:absolute hover:after:right-auto hover:after:bottom-0"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }

                // Bold text
                if (block.startsWith("**") && block.includes("**")) {
                  const text = block.replace(/\*\*/g, "");
                  return (
                    <p key={idx} className="text-foreground font-semibold mb-2">
                      {text}
                    </p>
                  );
                }

                // List text
                if (block.startsWith("- ")) {
                  const items = block.split("\n");

                  // split the texts which starts with - and also split the test which has :** in it.
                  const refinedText = items
                    .map((item) => item.replace("- ", ""))
                    .map((item) => item.split(":**"));

                  return (
                    <ul
                      key={idx}
                      className="list-disc list-inside space-y-2 text-muted-foreground mb-4"
                    >
                      {refinedText.map((items, idx) => (
                        <li key={idx}>
                          <>
                            {items.map((item, index) => (
                              <>
                                {/* Makes the text bold where the string starts with  ** */}
                                {item && item.startsWith("**") ? (
                                  <b key={index}>{item.replace("**", "")}</b>
                                ) : (
                                  <>
                                    {/* Makes that text bold which lies in between the sentences of in the middle of the sentences */}
                                    {item && item.includes("**") ? (
                                      <>
                                        {item.split(" *").map((val, i) => {
                                          if (val.startsWith("*")) {
                                            return (
                                              <b key={i}>
                                                {val.replace("*", " ")}
                                              </b>
                                            );
                                          } else {
                                            return (
                                              <p className="inline" key={i}>
                                                {val}
                                              </p>
                                            );
                                          }
                                        })}
                                      </>
                                    ) : (
                                      <p className="inline" key={index}>
                                        {item}
                                      </p>
                                    )}
                                  </>
                                )}
                              </>
                            ))}
                          </>
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Ordered list
                if (block.match(/^\d\./)) {
                  const items = block.split("\n");

                  const refinedText = items
                    .map((item) => item.replace(/^\d\.\s/, ""))
                    .map((item) => item.split(":**"));
                  return (
                    <ol
                      key={idx}
                      className="list-decimal list-inside space-y-2 text-muted-foreground mb-4"
                    >
                      {refinedText.map((items, idx) => (
                        <li key={idx}>
                          <>
                            {items.map((item, index) => (
                              <>
                                {/* Makes the text bold where the string starts with  ** */}
                                {item && item.startsWith("**") ? (
                                  <b key={index}>{item.replace("**", "")}</b>
                                ) : (
                                  <>
                                    {/* Makes that text bold which lies in between the sentences of in the middle of the sentences */}
                                    {item && item.includes("**") ? (
                                      <>
                                        {item.split(" *").map((val, i) => {
                                          if (val.startsWith("*")) {
                                            return (
                                              <b key={i}>
                                                {val.replace("*", " ")}
                                              </b>
                                            );
                                          } else {
                                            return (
                                              <p className="inline" key={i}>
                                                {val}
                                              </p>
                                            );
                                          }
                                        })}
                                      </>
                                    ) : (
                                      <p className="inline" key={index}>
                                        {item}
                                      </p>
                                    )}
                                  </>
                                )}
                              </>
                            ))}
                          </>
                        </li>
                      ))}
                    </ol>
                  );
                }

                // Normal texts
                if (
                  !block.startsWith("## ") ||
                  !block.startsWith("**") ||
                  !block.startsWith("- ")
                ) {
                  const refinedParagraph = block.includes("**")
                    ? block.split(" *")
                    : "";
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
          <div className="col-span-2 h-screen py-12">
            <div className="sticky top-5 flex flex-col items-start justify-start gap-2">
              {/* Quick navigation to sub-topics */}
              <ul className="sticky top-5 flex flex-col items-start justify-start gap-1">
                <li>
                  <h2 className="text-md font-bold text-foreground">
                    Quick navs
                  </h2>
                </li>
                {article.description.split("\n\n").map((subTopic, idx) =>
                  subTopic.startsWith("## ") ? (
                    <li
                      className="cursor-pointer ease duration-300 font-regural text-md text-muted-foreground hover:text-foreground hover:px-5"
                      key={idx}
                    >
                      <a
                        href={`#${subTopic
                          .replace("## ", "")
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "")}`}
                      >
                        {subTopic.replace("## ", "")}
                      </a>
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>

              {/* YouTube video section */}
              <h2 className="text-md font-bold text-foreground mt-8">
                Explanation
              </h2>
              <iframe
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
