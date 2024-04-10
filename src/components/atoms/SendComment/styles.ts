import { mediaMaxWidth } from '@/utils/media-query';
import { styled } from 'styled-components';

export const SendCommentContainer = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.ateneoBlue};
  border-radius: 0.8rem;
  padding: 2rem;
  margin-top: 4rem;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.4rem;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.ateneoBlue};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

export const Label = styled.label`
  padding-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  padding: 1rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.ateneoBlue};
`;

export const Textarea = styled.textarea`
  width: 100%;
  background: none;
  border: none;
  border: 0.1rem solid ${({ theme }) => theme.ateneoBlue};
  border-radius: 0.8rem;
  padding: 1rem;
  resize: none;
  height: 10rem;
`;

export const Button = styled.button`
  width: 25%;
  background-color: ${({ theme }) => theme.ateneoBlue};
  padding: 1rem 0;
  color: white;
  text-transform: uppercase;
  border-radius: 0.8rem;
`;

export const Success = styled.div<{ show: boolean }>`
  position: fixed;
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  font-size: 1.6rem;
  top: ${({ show }) => (show ? '2rem' : '-2rem')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  background-color: ${({ theme }) => theme.ateneoBlue};
  transition:
    top 0.4s ease,
    opacity 0.4s ease,
    visibility 0.4s ease;

  ${mediaMaxWidth('mobile')`
      font-size: 1.4rem;
    `}
`;
