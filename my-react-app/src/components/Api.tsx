import React, { useState, useEffect } from "react";
type ResultProps = {
    email: string,
    gender: string
}
export default function Api() {
    const [data, setData] = useState<ResultProps[]>([])
    useEffect(() => {
        const api = async () => {
            const result = await fetch("https://randomuser.me/api", {
                method: "GET"
            });
            const jsonData = await result.json();
            setData(jsonData.results)
        }
        api()
    }, [])
    return (
        <div className="App">
            <div>{data.map((e) => {
                return (
                    <div>

                        <div>{e.email}</div>
                        <div>{e.gender}</div>
                    </div>

                )
            })}</div>
        </div>
    )
}