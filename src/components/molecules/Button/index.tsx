

import { FC } from 'react'
import * as S from './styles'
import ButtonProps from './props'

export const Button: FC<ButtonProps> = ({className, text, href, target, icon, sideIcon = 'left', onClick}) => {
  return <S.Button href={href} title={text} target={target ? '_blank' : '_self'} className={className} sideicon={sideIcon} onClick={onClick}>
    {icon && <S.Img src={icon.src} width={icon.width} height={icon.height} alt={`Icon que representa o texto: ${text}`} />}
    <S.Text>{text}</S.Text>
  </S.Button>
}

export default Button
