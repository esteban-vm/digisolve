import type { FC, HTMLAttributes, AnchorHTMLAttributes } from 'react'
import type { ImageProps } from 'next/image'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

type ComponentProps = Pick<HTMLAttributes<HTMLElement>, 'className'>
export type Component = FC<ComponentProps>

type RowComponentProps = Required<Pick<HTMLAttributes<HTMLDivElement>, 'children'>>

type ColComponentProps = RowComponentProps & {
  /** col span_1_of_2 | span_2_of_4 */
  isHalf?: boolean
  /** col span_2_of_2 | span_3_of_3 | span_4_of_4 */
  isFull?: boolean
  /** col span_1_of_3 */
  isOneThird?: boolean
  /** col span_2_of_3 */
  isTwoThirds?: boolean
  /** col span_1_of_4 */
  isOneQuarter?: boolean
  /** col span_3_of_4 */
  isThreeQuarters?: boolean
}

export type RowComponent = FC<RowComponentProps>
export type ColComponent = FC<ColComponentProps>

export type ImageComponentProps = Pick<ImageProps, 'src' | 'alt' | 'className'>
export type ImageComponent = FC<ImageComponentProps>

export type IconComponentProps = Pick<FontAwesomeIconProps, 'icon' | 'title' | 'className'>
export type IconComponent = FC<IconComponentProps>

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
