import React from 'react'
// instead of props u can write {name, age} ...it's called destructuring of props

function Student(props) {
  return (
    <div>
      <h1>Student: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default Student
