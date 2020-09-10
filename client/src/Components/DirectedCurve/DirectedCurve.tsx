import React from 'react'
import './DirectedCurve.scss'
import { ILine } from '../../Interface/interface'
interface IDirectedCurveProps {
  path: string
  lines: ILine[]
}

const DirectedCurve: React.FC<IDirectedCurveProps> = ({path, lines}: IDirectedCurveProps) => {
  return (
    <svg className="svg-wrapper">
      <g>
        <path
          d={path}
          fill="transparent"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <line x1={lines[0].x1} y1={lines[0].y1} x2={lines[0].x2} y2={lines[0].y2} stroke="black" strokeWidth="2" />
        <line x1={lines[1].x1} y1={lines[1].y1} x2={lines[1].x2} y2={lines[1].y2} stroke="black" strokeWidth="2" />
      </g>
    </svg>
  )
}

export default DirectedCurve