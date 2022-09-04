import React from "react";
import { NextPage } from "next";
import { getHello } from "../services/service";

type PageProps = {
  hello: string;
};

const IndexPage: NextPage<PageProps> = ({ hello }: PageProps) => (
  <div className="main">
    This is a boilerplate using Next.JS, Express, TypeScript, and TailwindCSS to
    create a web application.
    <br />
    Created by <a href="https://nickholas.dev">Nickholas Boboaca</a>
    <h1 className="text-3xl font-extrabold underline">Hello {hello}!</h1>
  </div>
);

IndexPage.getInitialProps = async () => {
  const { world } = await getHello();
  return { hello: world };
};
export default IndexPage;
