import Part from "./Part";

const Content = ({parts}) => {

    const PartItems = parts.map(part => <Part key={parts.id} name={part.name} exercise={part.exercises}/>);
    return (
        <div>
            {PartItems}
        </div>
    )
}
export default Content