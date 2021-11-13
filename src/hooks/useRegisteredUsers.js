import { useEffect, useState } from "react";

const useRegisteredUsers = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [registeredUsers, setRegisteredUsers] = useState([]);
    useEffect(() => {
        fetch('https://floating-taiga-26098.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setRegisteredUsers(data)
                setIsLoading(false);
            });
    }, []);


    return { registeredUsers, setRegisteredUsers, isLoading }
}

export default useRegisteredUsers;