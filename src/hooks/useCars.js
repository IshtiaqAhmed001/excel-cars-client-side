import { useEffect, useState } from "react";

const useCars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://floating-taiga-26098.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);

    return { cars, setCars }
}

export default useCars;