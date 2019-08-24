import React from "react";
import Header from "../components/header";
import { Layout, Container } from "theme-ui";
import Root from "../gatsby-theme-sidebar/root";

export default function Docs(props) {
  return (
    <Root>Hello Docs</Root>
    // <Layout>
    //   <Container>
    //     <Header />
    //     <div>Recent Posts</div>
    //     <ul>
    //       <li>
    //         <time>July 19, 2017</time>
    //         <a href="#">Learning React Hooks With Example</a>
    //       </li>
    //     </ul>
    //   </Container>
    // </Layout>
  );
}
