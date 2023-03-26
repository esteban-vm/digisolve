import type { FC, HTMLAttributes, AnchorHTMLAttributes } from 'react'
import type { ImageProps } from 'next/image'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type View = FC<Pick<HTMLAttributes<HTMLElement>, 'className' | 'id' | 'aria-labelledby'>>

type WithClassName = Pick<HTMLAttributes<HTMLElement>, 'className'>

export type ImageComponentProps = Pick<ImageProps, 'src' | 'alt'> & WithClassName
export type ImageComponent = FC<ImageComponentProps>

export type IconComponentProps = Required<Pick<FontAwesomeIconProps, 'icon' | 'title'>> & WithClassName
export type IconComponent = FC<IconComponentProps>

export type NavbarComponent = FC<WithClassName>

export type PackageComponentProps = {
  heading: string
  price: number
  duration: number
  benefits: [string, string, string, string, string]
} & WithClassName
export type PackageComponent = FC<PackageComponentProps>

export type ButtonComponentProps = {
  isFull?: boolean
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'role' | 'onClick' | 'onMouseEnter' | 'children'>
export type ButtonComponent = FC<ButtonComponentProps>

export type HeadingComponentProps = {
  heading: string
  subheading?: string
} & Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'id' | 'role'>
export type HeadingComponent = FC<HeadingComponentProps>
