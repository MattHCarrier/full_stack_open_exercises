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

export default Total