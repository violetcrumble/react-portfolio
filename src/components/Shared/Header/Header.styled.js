import styled from "styled-components";
import Colors from "../_colorScheme";

export const HeaderStyles = styled.header`
  background-color: ${Colors.primaryBackgroundColor.standard};
  color: ${Colors.primaryTextColor.standard};
  text-align: center;

  .logo {
    margin: 20px auto;
  }
`;
