import { useEffect, useState } from "react";

const useRegisteredUsers = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [registeredUsers, setRegisteredUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setRegisteredUsers(data)
                setIsLoading(false);
            });
    }, []);


    return { registeredUsers, setRegisteredUsers, isLoading }
}

export default useRegisteredUsers;