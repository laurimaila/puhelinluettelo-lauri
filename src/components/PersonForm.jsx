import React from 'react'
//import styles from './PersonForm.module.css'

const PersonForm = ({ addNumber, newName, handleNameChange, newNumber, handleNumberChange }) => {

  return (
    <div>

      <h3>Add a new contact</h3>

      <form onSubmit={addNumber}>

        <div>
          <label>Name</label>
          <input
            id={"nameinput"}
            value={newName}
            onChange={handleNameChange}
          />
        </div>

        <div>
          <label>Number</label>
          <input
            id={"numberinput"}
            value={newNumber}
            onChange={handleNumberChange} />
        </div>

        <div>
          <button id={"addbutton"} type="submit">Add</button>
        </div>

      </form>
    </div>
  )
}

export default PersonForm