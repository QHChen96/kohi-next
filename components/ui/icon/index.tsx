import { FC } from 'react';
import tw, { TwStyle } from 'twin.macro';

interface IconProps {
  size?: number
  color?: string
}

const iconStyles = tw`fill-current inline-block`

const IconHeart: FC<IconProps> = ({ size=24 }) => {
  return (
    <svg style={{width: `${size}px`, height: `${size}px`}} css={iconStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
    </svg>
  )
}
const IconSearch: FC<IconProps> = ({ size=24 }) => {
  return (
    <svg style={{width: `${size}px`, height: `${size}px`}} css={iconStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M5 10.745C5 7.584 7.598 5 10.828 5c3.23 0 5.828 2.583 5.828 5.745 0 3.16-2.598 5.744-5.828 5.744C7.598 16.49 5 13.906 5 10.745zM10.828 3C6.516 3 3 6.456 3 10.745c0 4.288 3.516 7.744 7.828 7.744 1.76 0 3.388-.576 4.698-1.55l4.767 4.768 1.414-1.414-4.74-4.741a7.656 7.656 0 0 0 1.689-4.807C18.656 6.455 15.14 3 10.828 3z"></path>
    </svg>
  )
}
const IconAccount: FC<IconProps> = ({ size=24 }) => {
  return (
    <svg style={{width: `${size}px`, height: `${size}px`}} css={iconStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12.149 4C10.6817 4 9.50879 5.17543 9.50879 6.60496C9.50879 8.0345 10.6817 9.20993 12.149 9.20993C13.6163 9.20993 14.7892 8.0345 14.7892 6.60496C14.7892 5.17543 13.6163 4 12.149 4ZM7.50879 6.60496C7.50879 4.05257 9.59546 2 12.149 2C14.7025 2 16.7892 4.05257 16.7892 6.60496C16.7892 9.15736 14.7025 11.2099 12.149 11.2099C9.59546 11.2099 7.50879 9.15736 7.50879 6.60496ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C5.97552 17.125 5.28635 18.5132 5.07177 20H18.9282C18.8452 19.4247 18.6906 18.8607 18.4672 18.3212C18.1154 17.4719 17.5998 16.7003 16.9497 16.0503C16.2997 15.4002 15.5281 14.8846 14.6788 14.5328C13.8295 14.1811 12.9193 14 12 14ZM5.63604 14.636C7.32387 12.9482 9.61305 12 12 12C13.1819 12 14.3522 12.2328 15.4442 12.6851C16.5361 13.1374 17.5282 13.8003 18.364 14.636C19.1997 15.4718 19.8626 16.4639 20.3149 17.5558C20.7672 18.6478 21 19.8181 21 21V22H3V21C3 18.6131 3.94821 16.3239 5.63604 14.636Z"></path>
    </svg>
  )
}
const IconBag: FC<IconProps> = ({ size=24 }) => {
  return (
    <svg style={{width: `${size}px`, height: `${size}px`}} css={iconStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21.2 21L19.7 6.4c-.1-.5-.5-.9-.9-.9h-2.5c-.4-2.3-2.2-3.8-4.4-3.8s-4 1.5-4.4 3.8H5.3c-.5 0-1 .4-.9.9L2.8 21.1c0 .3.1.5.2.8.2.2.4.4.7.4h16.6c.3 0 .5-.2.7-.4.2-.3.3-.6.2-.9zm-2.1-.9H4.8L6.1 7.6h11.6l1.4 12.5zM9.5 5.6c.3-1.2 1.1-1.9 2.3-1.9 1.2 0 2 .7 2.3 1.9H9.5z"></path>
    </svg>
  )
}
const IconClose: FC<IconProps> = ({ size=24 }) => {
  return (
    <svg style={{width: `${size}px`, height: `${size}px`}} css={[iconStyles]} role="presentation" viewBox="0 0 16 14">
      <path strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
    </svg>
  )
}
const IconUnChecked: FC<IconProps> = ({ size=24 }) => {
  return (
    <svg style={{width: `${size}px`, height: `${size}px`}} css={iconStyles} role="presentation" viewBox="0 0 15 15">
      <path d="M.5.5h14v14H.5z" stroke="currentColor" fill="none"></path>
    </svg>
  )
}
const IconPlus: FC<IconProps> = ({ size=12 }) => {
  return (
    <svg width={size} height={size} aria-hidden="true" focusable="false" role="presentation">
      <path d="M1.5 5h7M5 1.5v7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}
const IconMinus: FC<IconProps> = ({ size=12 }) => {
  return (
    <svg width={size} height={size} aria-hidden="true" focusable="false" role="presentation">
      <path d="M1.5 5h7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}
const IconChecked: FC<IconProps> = ({ size=24 }) => {
  return (
    <svg style={{width: `${size}px`, height: `${size}px`}} css={iconStyles} role="presentation" viewBox="0 0 15 15">
      <path d='M0 0h15v15H0z'/>
      <path fill='none' stroke='#FFF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' d='M4 8l2 2 5-5'/>
    </svg>
  )
}
const IconFilterArrow: FC<IconProps> = ({ size=24 }) => {
  return (
    <svg width="24" height="8" css={iconStyles} role="presentation" viewBox="0 0 8 8">
      <path d="M1 5.5l4-4 4 4" strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' stroke="currentColor" fill="none"></path>
    </svg>
  )
}
const IconFavor: FC<IconProps> = ({ size=24, color='inherit' }) => {
  return (
    <svg color={color} width="44" height="44" viewBox="0 0 44 44" fill="inherit" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" role="presentation">
      <path d="M22 31.68l-8.85-9.23a5.24 5.24 0 0 1-1-6 5.24 5.24 0 0 1 8.41-1.37L22 16.5l1.44-1.42a5.24 5.24 0 0 1 8.38 1.36 5.24 5.24 0 0 1-1 6L22 31.68z"></path>
    </svg>
  )
}
const IconStar: FC<IconProps> = () => {
  return (
    <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
    </svg>
  )
}

export { IconHeart, IconSearch, IconAccount, IconBag, IconClose, IconUnChecked, IconChecked, IconFilterArrow, IconFavor, IconPlus, IconMinus, IconStar }
