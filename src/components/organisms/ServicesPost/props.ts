import CardProps from '@/components/atoms/Card/props';
import { ReactNode } from 'react';

export default interface ServicePostProps {
  title: ReactNode;
  description: ReactNode;
  posts: CardProps[];
  subTitle?: boolean;
}
