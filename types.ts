import type { FC, HTMLAttributes } from 'react'

export type FunctionalComponent<T = Record<string, unknown>> = FC<T & HTMLAttributes<HTMLElement>>
