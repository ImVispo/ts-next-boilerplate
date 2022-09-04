import React from "react";
import { NextPage } from "next";
import { getHello } from "../services/service";
import "../styles/index.css";

type PageProps = {
  hello: string;
};

const IndexPage: NextPage<PageProps> = ({ hello }: PageProps) => (
  <div className="main">
    This is a boilerplate using Next.JS, Express, TypeScript, and TailwindCSS to
    create a web application.
    <br />
    Created by <a href="https://nickholas.dev">Nickholas Boboaca</a>
    hello {hello}
  </div>
);

IndexPage.getInitialProps = async () => {
  const { world } = await getHello();
  return { hello: world };
};
export default IndexPage;
