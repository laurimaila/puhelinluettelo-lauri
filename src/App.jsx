import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import PersonForm from './components/PersonForm'
import Contacts from './components/Contacts'
import styles from './App.module.css'
import Notification from './components/Notification'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [AlertMessage, setAlertMessage] = useState({ msg: null, type: null })

  useEffect(() => {
    personService
      .getAll()
      .then(initialNotes => {
        setContacts(initialNotes)
      })
  }, [])

  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName,
      number: newNumber,
      id: contacts.length + 1

    }
    if (contacts.find(cont => cont.name === newName)) {

      const contactToChange = contacts.find(cont => cont.name === newName)
      if (window.confirm(`${contactToChange.name} is already added to phonebook, replace the old number with a new one?`)) {
        numberObject.id = contactToChange.id
        personService
          .update(contactToChange.id, numberObject)
          .then(() => {
            setContacts(contacts.map(f => f.id !== contactToChange.id ? f : numberObject
            ))
            setAlertMessage({
              msg: `Changed ${contactToChange.name}`,
              type: "success"
            }

            )
            setTimeout(() => {
              setAlertMessage({ msg: null, type: null })
            }, 3000)
          })
          .catch(error => {
            setAlertMessage({ msg: error.response.data.error, type: "error" })

            setTimeout(() => {
              setAlertMessage({ msg: null, type: null })
            }, 5000)
          })
      }
    } else {

      personService
        .create(numberObject)
        .then(returnedPerson => {
          setContacts(contacts.concat(returnedPerson))
          setAlertMessage({
            msg: `Added ${numberObject.name}`,
            type: "success"
          }
          )
          setTimeout(() => {
            setAlertMessage({ msg: null, type: null })
          }, 3000)
        })
        .catch(error => {
          setAlertMessage({ msg: error.response.data.error, type: "error" })

          setTimeout(() => {
            setAlertMessage({ msg: null, type: null })
          }, 5000)
        })

    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        Phonebook
      </div>

      <Notification alertObject={AlertMessage} />
      <div className={styles.main}>
        <div className={styles.newContact}>


          <PersonForm addNumber={addNumber} newName={newName} handleNameChange={handleNameChange}
            newNumber={newNumber} handleNumberChange={handleNumberChange} />
        </div>
        <div className={styles.showContacts}>

          <Contacts contacts={contacts} filter={filter} setFilter={setFilter}
            setContacts={setContacts} setAlertMessage={setAlertMessage} />
        </div>
      </div>
      <div className={styles.footer}>
        Lauri Maila 2023
      </div>
    </div>

  )

}
export default App
