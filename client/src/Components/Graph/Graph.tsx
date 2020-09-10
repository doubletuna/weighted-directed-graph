import React from 'react'
import { constants } from '../../constants'
import './Graph.scss'
import DirectedCurve from '../DirectedCurve/DirectedCurve'

interface IGraphProps {
  from?: string
  to?: string
}

const Graph: React.FC<IGraphProps> = ({from, to}: IGraphProps) => {

  return (
    <div className="graph-wrapper" >
      {
        constants.nodes.map(n => {
          return <div key={`${n}_nodes`} className={`node ${n.toLowerCase()}${from === n ? ' active-from' : ''}${to === n ? ' active-to' : ''}`}>{n}</div>
        })

      }
      {
        constants.directedArrows.map((d, idx) => {
          return (
            <div key={`${idx}_curves`}>
              <DirectedCurve path={d.path} lines={d.lines} />
              <div className="distance" style={{top:d.distance.coords[1], left: d.distance.coords[0]}}>{d.distance.value}</div>
            </div>
          )
        })
      }
    </div >
  )
}

export default Graph