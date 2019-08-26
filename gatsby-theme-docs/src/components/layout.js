/** @jsx jsx */
import { css, Styled } from "theme-ui";
import { jsx, Layout, Main, Container, Box } from "theme-ui";
import Header from "./header";
import Sidebar from "../components/sidebar";

const PageLayout = ({ children, ...props }) => {
  return (
    <Styled.root>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`
        })}
      >
        <Layout>
          <Header {...props} />
          <Main>
            <Container py={0} px={3}>
              <div
                sx={{
                  display: ["block", "flex"],
                  mx: -3
                }}
              >
                <Sidebar />
                <div
                  sx={{
                    overflow: "hidden"
                  }}
                >
                  {children}
                </div>
              </div>
            </Container>
          </Main>
        </Layout>
      </div>
    </Styled.root>
  );
};

export default PageLayout;
