import React from 'react'
import contacts from '../contacts';
import Card from './Card'

function UserBody(){

    function createCard(contact) {
        return (
            <Card
            name={contact.name}
            />
        );
    }

    return (
        <>
            <h1>Hi user</h1>
            {contacts.map(createCard)}
        </>
        
    )
}

export default UserBody;