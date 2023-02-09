import styled from "styled-components";

const SiteHeader = styled.header`
  padding: 0.5rem 0;
  text-align: center;
  border-bottom: solid 1px var(--light-grey);
  background-color: var(--white);
`;

const Header = (): JSX.Element => {
  return (
    <SiteHeader>
      <h1>iTunes Search</h1>
    </SiteHeader>
  );
};

export default Header;
