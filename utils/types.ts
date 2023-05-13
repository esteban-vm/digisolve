import type { FC, SVGProps } from 'react'
import type { IconName } from '@/components'

export type PropsWithClassName<P = unknown> = P & { className?: string }
export type Component<P = unknown> = FC<PropsWithClassName<P>>

export type SVGComponent = FC<SVGProps<SVGSVGElement>>

type BaseProps<P> = P & { id: ID; text: string }
type ID = `${string}-${string}-${string}-${string}-${string}`
type Image = { src: string; width: number; height: number }

export type PropsWithLink<P = unknown> = BaseProps<P & { link?: string }>
export type PropsWithImage<P = unknown> = BaseProps<P & { image: Image }>
export type PropsWithIcon<P = unknown> = BaseProps<P & { icon: IconName }>

export type ComponentWithLink<P = unknown> = Component<PropsWithLink<P>>
export type ComponentWithImage<P = unknown> = Component<PropsWithImage<P>>
export type ComponentWithIcon<P = unknown> = ComponentWithLink<PropsWithIcon<P>>

export type { PropsWithChildren } from 'react'

/**
 * @see {@link https://stackoverflow.com/questions/66140451/typescript-add-kebab-case-types-form-actual-camel-case-keys |TypeScript add kebab case types form actual camel case keys}
 */
export type KebabCase<S> = S extends `${infer C}${infer T}`
  ? KebabCase<T> extends infer U
    ? U extends string
      ? T extends Uncapitalize<T>
        ? `${Uncapitalize<C>}${U}`
        : `${Uncapitalize<C>}-${U}`
      : never
    : never
  : S
