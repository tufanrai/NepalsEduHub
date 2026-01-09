import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { article } from "@/lib/Contents";

const SpecificNote = () => {
  const { id } = useParams();
  console.log(id);
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
              className="mb-4 text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100/20"
            >
              <Link to="/notes">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Notes
              </Link>
            </Button>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                {article[id].subject}
              </span>
              <span className="flex items-center gap-1.5 text-neutral-400 text-sm">
                <Clock className="w-4 h-4" />
                {article[id].read}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-300 leading-tight">
              {article[id].title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="bg-neutral-100/50">
        <div className="container flex flex-col md:flex-row items-start justify-center px-4 lg:px-8">
          {/* Social Links */}
          <div className="max-w-3xl flex items-start justify-end py-12 md:h-screen">
            <ul className="md:sticky md:top-5 flex md:flex-col items-end justify-start gap-1">
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
          <div className="max-w-4xl bg-white shadow shadow-xl/30 px-8 pb-24">
            {/* Article Content */}
            <article
              style={{ whiteSpace: "pre-wrap" }}
              className="prose prose-lg max-w-none"
            >
              {article[id].description.split("\n\n").map((block, idx) => {
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
                      className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4 cursor-pointer ease duration-300 relative after:content-['#'] after:hidden hover:after:inline hover:after:italic hover:after:text-blue-500/50 hover:after:absolute hover:after:right-auto hover:after:bottom-0"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }

                // Bold text
                if (block.startsWith("**") && block.includes("**")) {
                  const text = block.replace(/\*\*/g, "");
                  return (
                    <p
                      key={idx}
                      className="text-foreground text-base lg:text-lg font-semibold mb-2"
                    >
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
                                  <b
                                    key={index}
                                    className="text-foreground text-base lg:text-lg font-semibold mb-2"
                                  >
                                    {item.replace("**", "")}
                                  </b>
                                ) : (
                                  <>
                                    {/* Makes that text bold which lies in between the sentences of in the middle of the sentences */}
                                    {item && item.includes("**") ? (
                                      <>
                                        {item.split(" *").map((val, i) => {
                                          if (val.startsWith("*")) {
                                            return (
                                              <b
                                                key={i}
                                                className="text-foreground text-base lg:text-lg font-semibold mb-2"
                                              >
                                                {val.replace("*", " ")}
                                              </b>
                                            );
                                          } else {
                                            return (
                                              <p
                                                className="text-foreground text-base lg:text-lg font-regural mb-2 inline"
                                                key={i}
                                              >
                                                {val}
                                              </p>
                                            );
                                          }
                                        })}
                                      </>
                                    ) : (
                                      <p
                                        className="text-foreground text-base lg:text-lg font-regural mb-2 inline"
                                        key={index}
                                      >
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
                                  <b
                                    key={index}
                                    className="text-foreground text-base lg:text-lg font-semibold mb-2"
                                  >
                                    {item.replace("**", "")}
                                  </b>
                                ) : (
                                  <>
                                    {/* Makes that text bold which lies in between the sentences of in the middle of the sentences */}
                                    {item && item.includes("**") ? (
                                      <>
                                        {item.split(" *").map((val, i) => {
                                          if (val.startsWith("*")) {
                                            return (
                                              <b
                                                key={i}
                                                className="text-foreground text-base lg:text-lg font-semibold mb-2"
                                              >
                                                {val.replace("*", " ")}
                                              </b>
                                            );
                                          } else {
                                            return (
                                              <p
                                                className="text-foreground text-base lg:text-lg font-regural mb-2 inline"
                                                key={i}
                                              >
                                                {val}
                                              </p>
                                            );
                                          }
                                        })}
                                      </>
                                    ) : (
                                      <p
                                        className="text-foreground text-base lg:text-lg font-regural mb-2 inline"
                                        key={index}
                                      >
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
                    : [block];
                  return (
                    <>
                      {refinedParagraph.map((val, idx) => (
                        <>
                          {val && val.startsWith("*") && val.includes(":**") ? (
                            <>
                              {val.split(":**").map((sent, indx) => (
                                <>
                                  {sent.startsWith("*") ? (
                                    <>
                                      <b
                                        key={indx}
                                        className="text-foreground text-base lg:text-lg font-semibold mb-2"
                                      >
                                        {sent.replace("*", " ")}
                                      </b>
                                    </>
                                  ) : (
                                    <>
                                      <p
                                        key={indx}
                                        className="text-foreground text-base lg:text-lg font-regural mb-2 inline"
                                      >
                                        {sent}
                                      </p>
                                    </>
                                  )}
                                </>
                              ))}
                            </>
                          ) : (
                            <p
                              key={idx}
                              className="text-foreground text-base lg:text-lg font-regural mb-2 inline"
                            >
                              {val}
                            </p>
                          )}
                        </>
                      ))}
                    </>
                  );
                }
              })}
            </article>
          </div>

          {/* Youtube video links  and quick navs */}
          <div className="max-w-3xl h-screen py-12 px-5 hidden md:block">
            <div className="sticky top-5 flex flex-col items-start justify-start gap-2">
              {/* Quick navigation to sub-topics */}
              <ul className="sticky top-5 flex flex-col items-start justify-start gap-1">
                <li>
                  <h2 className="text-md font-bold text-foreground">
                    Quick navs
                  </h2>
                </li>
                {article[id].description.split("\n\n").map((subTopic, idx) =>
                  subTopic.startsWith("## ") ? (
                    <li
                      className="cursor-pointer ease duration-300 font-regural text-md md:text-lg text-muted-foreground hover:text-foreground hover:px-2"
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
              {/* <h2 className="text-md font-bold text-foreground mt-8">
                Explanation
              </h2>
              <iframe
                src="https://www.youtube.com/embed/ttpO7wNqFv8?si=jXNXn8GT9l9kMIcY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpecificNote;
