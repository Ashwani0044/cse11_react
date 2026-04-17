import React from 'react'

function Student(props) {
  return (
    <div>
      <h1>Student: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default Student
