import { useState } from 'react'

const Search = ({ data, setData, initial }) => {
    const [search, setSearch] = useState('')

    const handleOnChangeSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
        if (e.target.value !== '') {
            setData(
                data.filter(
                    (pokemon) =>
                        pokemon.name
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase()) ||
                        pokemon.num.includes(e.target.value) ||
                        pokemon.type
                            .toString()
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase()),
                ),
            )
        } else {
            setData(initial)
        }
    }

    return (
        <input
            id='search'
            type='text'
            value={search}
            onChange={handleOnChangeSearch}
            className='block w-full bg-gray-100 dark:bg-slate-700 p-3 border rounded text-xl'
            placeholder='Search 🔍'
        />
    )
}

export default Search
