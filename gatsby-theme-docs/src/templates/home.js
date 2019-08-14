import React from "react";
import Header from "../components/header";
import { Layout, Container } from "theme-ui";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Header />
        <div>Recent Posts</div>
        <ul>
          <li>
            <time>July 19, 2017</time>
            <a href="#">Learning React Hooks With Example</a>
          </li>
        </ul>
      </Container>
    </Layout>
  );
}
