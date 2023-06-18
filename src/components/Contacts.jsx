import React from 'react'
import personService from '../services/persons'
import SingleContact from './SingleContact'
import Filter from './Filter'
//import styles from './Contacts.module.css'

const Contacts = ({ contacts, filter, setFilter, setContacts, setAlertMessage }) => {

  const deleteContact = (id) => {
    const contactToDelete = contacts.find(n => n.id === id)
    if (window.confirm(`Delete ${contactToDelete.name}?`)) {
      personService
        .deleteData(id)
        .then(() => {
          setContacts(contacts.filter(n => n.id !== id))
          setAlertMessage({
            msg: `Deleted ${contactToDelete.name}`,
            type: "success"
          }
          )
          setTimeout(() => {
            setAlertMessage({ msg: null, type: null })
          }, 3000)
        })
    }
  }

  return (
    <div>
      <h3>Contacts</h3>
      <Filter filter={filter} setFilter={setFilter} />

      <ul>
        {contacts.filter(f => f.name.toLowerCase().includes(filter.toLowerCase())
          || filter === '')
          .map(contact =>
            <SingleContact key={contact.id} contact={contact} deleteContact={deleteContact} />
          )}

      </ul>
    </div>
  )
}

export default Contacts
