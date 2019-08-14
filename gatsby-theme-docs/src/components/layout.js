/** @jsx jsx */
import { css, Styled } from "theme-ui";
import { jsx } from "theme-ui";
import Header from "./header";

const Layout = ({ children, ...props }) => {
  return (
    <Styled.root>
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`
          })}
        >
          <Header {...props} />
          {children}
        </div>
      </div>
    </Styled.root>
  );
};

export default Layout;
