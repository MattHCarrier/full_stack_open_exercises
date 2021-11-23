import {useState} from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [ newName, setNewName] = useState('')

    const addName = (event) => {
      event.preventDefault()
        const nameObject ={
          name: newName
        }

        let checkDuplicate = persons.some(person =>{
            return JSON.stringify(nameObject) === JSON.stringify(person)
        })
        if(!checkDuplicate) {
            setPersons(persons.concat(nameObject))
            setNewName('')
        } else {
            window.alert(`${nameObject.name} is already in the phonebook`)
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
  return(
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
          <div>
            <input
                value={newName}
                onChange={handleNameChange}
            />
              <input
                  value={newNumber}
                  onChange={handleNumberChange}
              />
          </div>
          <div>
            <button type={"submit"}>add</button>
          </div>
        </form>
        <h2>Numbers</h2>
          <ul>
              {persons.map(person => <li key={person.name}>{person.name}</li>)}

          </ul>
      </div>
  )
}

export default App