import React from 'react'

function Profile(props) {
    return (
        <div>
            <h1>Name: {props.title}, {props.name}</h1>
            <h2>Gender: {props.gender}</h2>
        </div>
    )
}

export default Profile