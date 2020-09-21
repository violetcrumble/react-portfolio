import styled from "styled-components";
import Colors from "../_colorScheme";

export const ProjectCardStyles = styled.div`
  border: solid 1px ${Colors.tertiaryAccentColor.standard};
  background-color: ${Colors.primaryBackgroundColor.standard};

  img {
    max-width: 100%;
  }
`;
