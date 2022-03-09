import Search from './Search'
import Card from './Card/Card'

import { useState } from 'react'

const Main = ({ initial }) => {
    const [data, setData] = useState(initial)

    return (
        <main className='mt-5'>
            <Search data={data} setData={setData} initial={initial} />
            <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                {data.map((pokemon) => (
                    <Card pokemon={pokemon} key={pokemon.id} />
                ))}
            </section>
        </main>
    )
}

export default Main
