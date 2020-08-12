import React from 'react'

import './Result.scss'

interface ResultProps {
  distance: number,
  from: string,
  to: string
}

const Result = (props: ResultProps) => {

  return (
    <div>
      <div>
        The distance from {props.from} to {props.to} is {props.distance}
      </div>
    </div>
  )

}

export default Result