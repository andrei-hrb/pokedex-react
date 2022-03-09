import { useState, useEffect } from 'react'

const DarkMode = () => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('dark') === null) {
            localStorage.setItem('dark', 'false')
        } else {
            console.log(localStorage.getItem('dark'))
            if (localStorage.getItem('dark') === 'true') {
                setDark(true)
                document.querySelector('html').classList.add('dark')
            }
        }
    }, [])

    const handleClick = () => {
        setDark(!dark)
        localStorage.setItem('dark', !dark)

        if (!dark) {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }

    return <button onClick={handleClick}>{dark ? '☀️' : '🌙'}</button>
}

export default DarkMode
