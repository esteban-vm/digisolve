import type { FC, HTMLAttributes } from 'react'

export type AppComponent<T = unknown> = FC<T & HTMLAttributes<HTMLElement>>
