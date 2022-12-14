import React, { useEffect, useState } from "react";
import { Image } from '@chakra-ui/react'
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
            <div className="nes-table-responsive">
                 <table className="nes-table is-bordered is-centered">
                {users.map((user) => (
                    <h6 key={user._id}>{user.username} <Image boxSize='65px' src='/img/pikachu.png' alt='pikachu' /> </h6>
                    ))}
                </table>
            </div>
    );
}

export default Users