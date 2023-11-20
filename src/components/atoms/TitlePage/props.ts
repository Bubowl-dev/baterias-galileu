import { ReactNode } from "react";

export default interface TitlePageProps {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  subTitle?: boolean;
}
