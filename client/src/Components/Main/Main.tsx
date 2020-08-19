import React, { useState } from 'react'
import Result from '../Result/Result'
import Graph from '../Graph/Graph'
import './Main.scss'

const Main = () => {
  const [from, setFrom] = useState<string>()
  const [to, setTo] = useState<string>()
  // const [resultsArray, setResultsArray] = useState<[]>()
  const [distance, setDistance] = useState<number>()

  const [nodes] = React.useState([
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
    { label: "E", value: "E" },
    { label: "F", value: "F" }
  ]);

  const handleFromChange = (e: any) => {
    setFrom(e.target.value)
    setTo('')
  }

  const handleToChange = (e: any) => {
    setTo(e.target.value)
    fetchWeightedDirectedPath(e.target.value)
  }

  const fetchWeightedDirectedPath = async (to: string) => {
    const response = await fetch(`/route/${from}/${to}`)
    const processed = await response.json()
    console.log('final ', processed)
    // setResultsArray(processed.data)
    setDistance(processed.distance)
  }

  return (
    <div className="main-wrapper">
      <div className="header">
        Dijkstra’s algorithm, finding the shortest path in JavaScript
      </div>
      <div className="select-section">
        <select className="select-option" onChange={handleFromChange} defaultValue="DEFAULT" >
          <option value="DEFAULT" disabled hidden>Choose "from"</option>
          {nodes.map(node => (
            <option
              key={node.value}
              value={node.value}
            >
              {node.label}
            </option>
          ))}
        </select>
        {
          from &&
          <select className="select-option" onChange={handleToChange} defaultValue="DEFAULT" >
            <option value="DEFAULT" disabled hidden>Choose "to"</option>
            {nodes.filter(n => n.value !== from).map(node => (
              <option
                key={node.value}
                value={node.value}
              >
                {node.label}
              </option>
            ))}
          </select>
        }
      </div>
      {
        (from && to && distance &&
          <div className="result">
            <Result from={from} to={to} distance={distance} />
          </div>)
        || <div className="result">
          Choose from/to
        </div>
      }
      <Graph from={from} to={to} />
      <div className="github"><a href="https://github.com/doubletuna/weighted-directed-graph" target="_blank" rel="noopener noreferrer">Dev by DoubleTuna</a></div>
    </div>
  )
}

export default Main