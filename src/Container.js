import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  position: sticky;
  @media screen and (max-width: 825px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    position: sticky;
  }
`;

export default Container;
