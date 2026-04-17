import React from 'react'
import './Exp4.css'

function Exp4({name, course, marks}) {
  return (
    <div className="student-card">
        <h1 className="student-name">{name}</h1>
        <p className="student-course">Course: {course}</p>
        <p className="student-marks">Marks: {marks}</p>
    </div>
  )
}

export default Exp4
