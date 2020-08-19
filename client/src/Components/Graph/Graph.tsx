import React from 'react'
import { constants } from '../../constants'
import './Graph.scss'
import DirectedCurve from '../DirectedCurve/DirectedCurve'

interface GraphProps {
  from?: string
  to?: string
}

const Graph = (props: GraphProps) => {

  const handleClick = (e: any) => {
    console.log(e.pageX - 413, e.pageY - 169)
  }
  return (
    <div className="graph-wrapper" onClick={handleClick}>
      {
        constants.nodes.map(n => {
          return <div key={n} className={`node ${n.toLowerCase()}${props.from === n ? ' active-from' : ''}${props.to === n ? ' active-to' : ''}`}>{n}</div>
        })

      }
      {
        constants.directedArrows.map((d, idx) => {
          return (
            <>
              <DirectedCurve key={idx} path={d.path} lines={d.lines} />
              <div className="distance" style={{top:d.distance.coords[1], left: d.distance.coords[0]}}>{d.distance.value}</div>
            </>
          )
        })
      }
    </div >
  )
}

export default Graph