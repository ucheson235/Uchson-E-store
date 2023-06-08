import React from 'react'

export default function Input(props) {
    if (!props.name && !props.occupation) {
        return (
            <h4>Name: unknown, occupation: UNKNOWN</h4>
        )
    }
  return (
    <h1 style={props.saturday}>name: {props.name}, occupation: {props.occupation}</h1>
  )
}

