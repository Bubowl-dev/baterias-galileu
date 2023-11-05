export type sideIconProps = 'left' | 'right';

export default interface ButtonProps {
  className?: string;
  icon?: {
    src: string,
    height: number,
    width: number
  },
  text: string;
  href: string;
  target: boolean;
  sideIcon?: sideIconProps;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}