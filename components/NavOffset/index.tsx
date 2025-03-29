// This component is a way to keep content from falling under the navbar.
// It needs a bit of logic built-in because we want the homepage background
// to fall under the navbar for a cool transparency effect, so we don't render
// this component on the homepage.

import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled from "styled-components";

const Offset = styled.div`
  margin-top: var(--navHeight);
`;

const NavOffset: React.FC<{ child: ReactNode }> = ({ child }) => {
  const router = useRouter();

  if (router.pathname !== "/") {
    return <Offset>{child}</Offset>;
  } else {
    return <>{child}</>;
  }
};

export default NavOffset;
