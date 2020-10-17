import React from 'react';
import './card-style.css';

export const Card = props => {
  return (
    <article className="card">
      <p>This is question number: {props.question}</p>
      <img className="image" src={props.image} alt="This is an image" />
    </article>
  )
}