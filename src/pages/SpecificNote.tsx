import { Layout } from "@/components/layout/Layout";
import React from "react";
import { useParams } from "react-router-dom";

const SpecificNote = () => {
  const { id } = useParams();
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative h-[45vh] min-h-[350px]">
        This is the hero section of the specific note.
      </section>

      {/* Content section */}
      <section className="py-16 bg-white">
        This is the main section of the specific note.
      </section>
    </Layout>
  );
};

export default SpecificNote;
