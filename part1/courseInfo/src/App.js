import React from "react";

const Header = ({course}) => {

    return <h1>{course}</h1>
}

const Part = ({name, exercise}) => (
    <p>{name} {exercise}</p>
)

const Content = ({parts}) => {

    const PartItems = parts.map(part => <Part name={part.name} exercise={part.exercises}/>);
    return (
        <div>
            {PartItems}
        </div>
    )
}
const Total = ({parts}) => {
    const sum = (a,b) => a+b
    const exercises = parts.map(part => part.exercises);
    const total = exercises.reduce(sum,0);
 return(
     <div>
        <p>{total}</p>
    </div>
 )
}
const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
          {
              name: 'Fundamentals of React',
              exercises: 10
          },
          {
              name: 'Using props to pass data',
              exercises: 7
          }
          , {
              name: 'State of a component',
              exercises: 14
          }
      ]
  }


  return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
          <Total parts={course.parts}/>
      </div>
  )
}

export default App