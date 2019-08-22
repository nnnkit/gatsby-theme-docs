import React from "react";

export default ({
  Layout,
  Header,
  Main,
  Sidebar,
  Content,
  Footer,
  ...props
}) => (
  <Layout>
    <Header>your custom header content</Header>
    <Main>
      <Sidebar>your custom sidebar content</Sidebar>
      <Content>{props.children}</Content>
    </Main>
    <Footer>your custom footer content</Footer>
  </Layout>
);
