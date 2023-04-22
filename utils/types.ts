import type { FC, HTMLAttributes, PropsWithChildren } from 'react'
import type { ImageProps } from 'next/image'
import type { LinkProps } from 'next/link'

type WithClassName = Pick<HTMLAttributes<HTMLElement>, 'className'>
type WithImage = { image: Required<Pick<ImageProps, 'src' | 'width' | 'height'>> }
type WithIcon = { icon: string | string[] }
type WithLink = { url?: LinkProps['href'] }

type PropsWithClassName<P> = P & WithClassName
type PropsWithImage<P> = P & WithImage
type PropsWithIcon<P> = P & WithIcon
type PropsWithLink<P> = P & WithLink

export type Component<P = unknown> = FC<PropsWithClassName<P>>
export type ComponentWithImage<P> = Component<PropsWithImage<P>>
export type ComponentWithIcon<P> = ComponentWithLink<PropsWithIcon<P>>
export type ComponentWithLink<P> = Component<PropsWithLink<P>>
export type ComponentWithChildren<P = unknown> = Component<PropsWithChildren<P>>

export type { IconProp } from '@fortawesome/fontawesome-svg-core'
