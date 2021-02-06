import React from 'react'
import { SvgXml } from 'react-native-svg'

interface SvgInterface {
  xml: string
  width: number
  height: number
}

export const Svg: React.FC<SvgInterface> = ({ xml, width, height }): React.ReactElement => {
  return <SvgXml xml={xml} width={width} height={height} />
}
