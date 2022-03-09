import Search from './Search'
import Card from './Card/Card'
import Fof from './404'

import { useState } from 'react'

const Main = ({ initial }) => {
    const [data, setData] = useState(initial)

    const cards = data.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.id} />
    ))

    return (
        <main className='mt-5'>
            <Search data={data} setData={setData} initial={initial} />
            {cards.length ? (
                <section className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                    {cards}
                </section>
            ) : (
                <Fof />
            )}
        </main>
    )
}

export default Main
