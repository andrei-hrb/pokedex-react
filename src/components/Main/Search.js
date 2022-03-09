import { useState } from 'react'

const Search = ({ data, setData, initial }) => {
    const [search, setSearch] = useState('')

    const handleOnChangeSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
        setData(
            initial.filter(
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
    }

    return (
        <input
            id='search'
            type='text'
            value={search}
            onChange={handleOnChangeSearch}
            className='block w-full bg-gray-100 dark:bg-slate-700 p-3 border rounded text-xl sm:text-lg'
            placeholder='Search 🔍'
        />
    )
}

export default Search
