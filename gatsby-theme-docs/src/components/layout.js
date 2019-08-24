/** @jsx jsx */
import { css, Styled } from "theme-ui";
import { jsx, Layout, Main, Flex, Box } from "theme-ui";
import Header from "./header";

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
            <Flex>
              <Box>Hello</Box>
              <Box>{children}</Box>
            </Flex>
          </Main>
        </Layout>
      </div>
    </Styled.root>
  );
};

export default PageLayout;
