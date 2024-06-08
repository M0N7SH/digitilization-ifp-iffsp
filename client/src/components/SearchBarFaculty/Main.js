import React from 'react'
import ProjectDetails from './ProjectDetails'
import Mark from './Mark'

function Main(props) {
  return (
    <div>
      <ProjectDetails project={props.project}/>
      <Mark project={props.project} />
    </div>
  )
}

export default Main
