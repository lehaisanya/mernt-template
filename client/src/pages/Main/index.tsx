import React, { useEffect, useState } from 'react'

export const MainPage = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('/api/data', {
            method: 'GET',
        })
            .then((data) => data.json())
            .then((data) => {
                setData(JSON.stringify(data, null, 4))
            })
    })

    return <pre>{data}</pre>
}
