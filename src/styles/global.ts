import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { mediaMaxWidth, viewportsBase } from "@/utils/media-query";

const { desktop1024, desktop1920, mobile, desktop1280 } = viewportsBase;

const GlobalStyles = createGlobalStyle`
  html {
    font-size: calc(100vw / ${desktop1920.width} * 10);

    @media (max-width: ${desktop1280.width}px) {
      font-size: calc(100vw / ${desktop1280.width} * 10);
    }

    @media (max-width: ${desktop1024.width}px) and (min-width: ${mobile.width + 1}px)  {
      font-size: calc(100vw / ${desktop1024.width} * 10);
    }

    @media (max-width: ${mobile.width}px) {
      font-size: calc(100vw / ${414} * 10);
    }
    
    @media (max-height: ${mobile.width}px) and (orientation: landscape) {
      font-size: calc(70vh / ${400} * 10);
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${theme.oxfordBlue};
    color: ${theme.black};

    ${mediaMaxWidth(900)`
      width: 3px;
    `}
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.oxfordBlue};
    border-radius: 20px;

    &:hover {
      background-color: ${theme.oxfordBlue};
    }
  }

  html {
    ${mediaMaxWidth("mobile")`
      scroll-padding-top: 6rem;
    `}
  }
  
`;

export default GlobalStyles;
