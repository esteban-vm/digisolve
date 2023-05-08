import type { FC } from 'react'
import type { EmptyObject } from 'type-fest'

export type Component<P = EmptyObject> = FC<P & { className?: string }>

type PropsWithID<P> = P & { id: `${string}-${string}-${string}-${string}-${string}` }
export type PropsWithLink<P> = P & PropsWithID<{ link?: string }>
export type PropsWithImage<P> = P & PropsWithID<{ image: { src: string; width: number; height: number } }>

export type { PropsWithChildren } from 'react'
export * from 'type-fest'
