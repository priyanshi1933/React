import React, { useState, useEffect } from "react";
interface User {
    id: number,
    name: string
}
const MyComponent: React.FC = () => {
    const [data, setData] = useState<User[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data))

    }, [])
    return (
        <>
            <div>User List</div>
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}
export default MyComponent