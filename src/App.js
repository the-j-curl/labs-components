import React from 'react';
import { Card } from './Card';

const questionArray = [
  {question: 1, image:"https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},
  {question: 2, image:"https://images.unsplash.com/photo-1458419948946-19fb2cc296af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
  {question: 3, image:"https://images.unsplash.com/photo-1602516297586-312f705402cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"}
];

export const App = () => {
  return (
  <section className="cards-wrapper">
    {questionArray.map(item => {
      console.log(questionArray)
      return (
        <Card image={item.image} question={item.question} />
    
      )
    })
  }
  </section>
)  
}