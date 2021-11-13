import { useEffect, useState } from "react";

const useRegisteredUsers = () => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setRegisteredUsers(data));
    }, []);

    return { registeredUsers, setRegisteredUsers }
}

export default useRegisteredUsers;