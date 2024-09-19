import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import MainContent from "../components/MainContent";
import Aside from "../components/Aside";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="mt-[80px] grid grid-cols-[1fr_2fr]  container mx-auto w-[1024px] border-1 border-[#1b2341] shadow-2xl">
      <Aside />
      <MainContent />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
