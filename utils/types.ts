import type { FC, HTMLAttributes, AnchorHTMLAttributes, PropsWithChildren } from 'react'
import type { ImageProps } from 'next/image'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ComponentProps<T = unknown> = Pick<HTMLAttributes<HTMLElement>, 'className'> & T

export type Component = FC<ComponentProps>
export type RowComponent = FC<ComponentProps<PropsWithChildren>>
export type ColComponent = FC<ComponentProps<PropsWithChildren<ColComponentProps>>>
export type ImageComponent = FC<ComponentProps<ImageComponentProps>>
export type IconComponent = FC<ComponentProps<IconComponentProps>>
export type TextComponent = FC<ComponentProps<TextComponentProps>>
export type PackageComponent = FC<ComponentProps<PackageComponentProps>>
export type ButtonComponent = FC<ComponentProps<ButtonComponentProps>>

export type ColComponentProps = Partial<{
  isHalf: boolean
  isFull: boolean
  isOneThird: boolean
  isTwoThirds: boolean
  isOneQuarter: boolean
  isThreeQuarters: boolean
}>

export type ImageComponentProps = {
  image: ImageProps['src']
  text: ImageProps['alt']
} & Required<Pick<ImageProps, 'width' | 'height'>>

export type IconComponentProps = Required<Pick<FontAwesomeIconProps, 'icon' | 'title'>>
export type TextComponentProps = { text: string }

export type PackageComponentProps = {
  heading: string
  price: number
  duration: number
  benefits: string[]
}

export type ButtonComponentProps = {
  isSubmit?: boolean
  url?: Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
} & TextComponentProps
