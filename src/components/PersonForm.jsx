import React from 'react'

const PersonForm = ({ addNumber, newName, handleNameChange, newNumber, handleNumberChange }) => {

  return (
    <div>


      <form onSubmit={addNumber}>

        <div>
          <label>Name:</label>
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