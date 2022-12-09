import React, { useEffect, useState } from "react";
import axios from 'axios'


// const URL_PREFIX = 'http://localhost:3001'
const URL_PREFIX = 'https://shiny-hunter-server.herokuapp.com'

function Users() {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const { data } = await axios.get(
            `${URL_PREFIX}/api/users`
        );
        const users = data;
        setUsers(users);
        console.log(users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
            <div>
                {users.map((user) => (
                    <h3 key={user._id}>{user.username}</h3>
                ))}
            </div>
    );
}

export default Users