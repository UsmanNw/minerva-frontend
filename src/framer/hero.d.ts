/* This file was generated by Unframer, do not edit manually */
import * as React from "react"

import { UnframerBreakpoint } from "unframer"

type Locale = string
export interface Props {
    children?: React.ReactNode
    locale?: Locale
    style?: React.CSSProperties
    className?: string
    id?: string
    width?: any
    height?: any
    layoutId?: string
    "variant"?: 'Desktop' | 'Tablet' | 'Phone'
    "title"?: string
    "words"?: string
    "subheading"?: string
    "chaosText"?: string
    "glowText"?: string
    "arrowLink"?: string
    "bGImageLeft"?: {src: string, srcSet?: string, alt?: string}
    "bGImageCenter"?: {src: string, srcSet?: string, alt?: string}
    "bGImageRight"?: {src: string, srcSet?: string, alt?: string}
}

const HeroFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

HeroFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants?: VariantsMap}) => any

export default HeroFramerComponent

