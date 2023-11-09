import styled from "styled-components";
import Link from "next/link";
import { sideIconProps } from "./props";
import LazyImage from "../../atoms/LazyImage";
import { mediaMaxWidth } from "@/utils/media-query";

export const Button = styled(Link)<{ sideicon: sideIconProps }>`
  display: flex;
  gap: 1.3rem;
  width: fit-content;
  align-items: center;
  flex-direction: ${({ sideicon }) =>
    sideicon === "left" ? "row" : "row-reverse"};
  box-shadow: 0rem 0.8rem 1rem 0rem rgba(14, 64, 97, 0.2);
  padding: 1.6rem 4.1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.ateneoBlue};
  color: ${({ theme }) => theme.white};

  ${mediaMaxWidth("mobile")`
    padding: 1rem 1.6rem;
  `}
`;

export const Img = styled(LazyImage)<{width: number}>`
  width: ${({width}) => `${width/10}rem`};
  height: fit-content;
`;

export const Text = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;
