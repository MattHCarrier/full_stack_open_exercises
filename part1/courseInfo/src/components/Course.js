import Header from "./Header";
import Content from "./Content";
import Total from "./Total";


const Course = ({course}) => {
    return(
        <>
            <Header key={course.id} course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </>
    )
}

export default Course