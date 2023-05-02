import type { FC } from 'react'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

export type Component<P = unknown> = FC<P & { className?: string }>

type PropsWithID<P = unknown> = P & { id: `${string}-${string}-${string}-${string}-${string}` }

export type PropsWithLink<P> = P & PropsWithID<{ link?: string }>
export type PropsWithImage<P> = P & PropsWithID<{ image: { src: string; width: number; height: number } }>
export type PropsWithIcon<P> = P & PropsWithLink<{ icon: IconProp }>

export type { PropsWithChildren } from 'react'
