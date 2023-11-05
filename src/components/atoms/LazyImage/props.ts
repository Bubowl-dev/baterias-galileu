import { ImgHTMLAttributes } from 'react';
import { ViewportBaseProps } from '@/utils/media-query/viewport-base';

export default interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  notLazy?: boolean;
  responsive?: {
    [key in ViewportBaseProps | number]?: string;
  };
}
