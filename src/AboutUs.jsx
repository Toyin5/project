import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Profile from './Profile'

export default function AboutUs() {
    const [users, setUsers] = useState([])
    const url = "https://randomuser.me/api/?results=5"

    useEffect(() => {
        async function fetch(url) {
            try {
                await axios.get(url).then((res) => setUsers(res.data.results)).catch((err) => console.log(err))
            } catch (error) {
                console.log(error)
            }
        }
        fetch(url)
    }, [])
    // const user = users[0]
    // console.log(user)


    return (
        <div>
            <h1>This is the about us component</h1>
            <p>Now we will import the profiles below <br />
            </p>
            <div>
                {users.map((user, index) =>
                    <Profile gender={user.gender} name={user.name.first} title={user.name.title} key={index} />
                )}
            </div>
            {/* <Profile gender={user.gender} name={user.name.first} title={user.name.title} /> */}
        </div>
    )
}
