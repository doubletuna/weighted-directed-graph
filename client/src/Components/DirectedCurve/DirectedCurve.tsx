import React from 'react'
import './DirectedCurve.scss'
interface DirectedCurveProps {
  path: string
  lines: any // need to create interface for this..
}

const DirectedCurve = (props: DirectedCurveProps) => {
  return (
    <svg className="svg-wrapper">
      <g>
        <path
          d={props.path}
          fill="transparent"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <line x1={props.lines[0].x1} y1={props.lines[0].y1} x2={props.lines[0].x2} y2={props.lines[0].y2} stroke="black" strokeWidth="2" />
        <line x1={props.lines[1].x1} y1={props.lines[1].y1} x2={props.lines[1].x2} y2={props.lines[1].y2} stroke="black" strokeWidth="2" />
      </g>
    </svg>
  )
}

export default DirectedCurve