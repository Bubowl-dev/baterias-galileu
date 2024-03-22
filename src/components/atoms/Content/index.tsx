import { FC } from 'react';
import { Article } from './styles';

const Content: FC<{ content: string }> = ({ content }) => <Article dangerouslySetInnerHTML={{ __html: content }} />;

export default Content;
