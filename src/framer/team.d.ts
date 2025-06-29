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
    "image1"?: {src: string, srcSet?: string, alt?: string}
    "name1"?: string
    "designation1"?: string
    "linkedinLink1"?: string
    "image2"?: {src: string, srcSet?: string, alt?: string}
    "name2"?: string
    "designation2"?: string
    "linkedinLink2"?: string
    "image3"?: {src: string, srcSet?: string, alt?: string}
    "name3"?: string
    "designation3"?: string
    "linkedinLink3"?: string
    "image4"?: {src: string, srcSet?: string, alt?: string}
    "name4"?: string
    "designation4"?: string
    "linkedinLink4"?: string
    "image5"?: {src: string, srcSet?: string, alt?: string}
    "name5"?: string
    "designation5"?: string
    "linkedinLink5"?: string
    "image6"?: {src: string, srcSet?: string, alt?: string}
    "name6"?: string
    "designation6"?: string
    "linkedinLink6"?: string
    "image7"?: {src: string, srcSet?: string, alt?: string}
    "name7"?: string
    "designation7"?: string
    "linkedinLink7"?: string
    "image8"?: {src: string, srcSet?: string, alt?: string}
    "name8"?: string
    "designation8"?: string
    "linkedinLink8"?: string
    "image9"?: {src: string, srcSet?: string, alt?: string}
    "name9"?: string
    "designation9"?: string
    "linkedinLink9"?: string
    "image10"?: {src: string, srcSet?: string, alt?: string}
    "name10"?: string
    "designation10"?: string
    "linkedinLink10"?: string
    "arrowLink"?: string
}

const TeamFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

TeamFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants?: VariantsMap}) => any

export default TeamFramerComponent

