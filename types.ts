import type { FC, HTMLAttributes, AnchorHTMLAttributes } from 'react'
import type { ImageProps } from 'next/image'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ViewComponent = FC<Pick<HTMLAttributes<HTMLElement>, 'id' | 'aria-labelledby' | 'className'>>

export type ImageComponentProps = Pick<ImageProps, 'src' | 'alt' | 'className'>
export type ImageComponent = FC<ImageComponentProps>

export type IconComponentProps = Pick<FontAwesomeIconProps, 'icon' | 'title' | 'className'>
export type IconComponent = FC<IconComponentProps>

export type BasicComponent = FC<Pick<HTMLAttributes<HTMLElement>, 'className'>>

export type PackageComponentProps = {
  heading: string
  price: number
  duration: number
  benefits: [string, string, string, string, string]
} & Pick<HTMLAttributes<HTMLElement>, 'className'>
export type PackageComponent = FC<PackageComponentProps>

export type ButtonComponentProps = {
  text: string
  isFull?: boolean
  isSubmit?: boolean
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>
export type ButtonComponent = FC<ButtonComponentProps>

export type HeadingComponentProps = {
  heading: string
  subheading?: string
} & Pick<HTMLAttributes<HTMLDivElement>, 'id' | 'role' | 'className'>
export type HeadingComponent = FC<HeadingComponentProps>
