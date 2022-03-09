import Image from './Image'
import Name from './Name'

const Card = ({ pokemon }) => {
    return (
        <div className='inline-flex items-center border rounded-lg overflow-hidden'>
            <Image id={pokemon.id} type={pokemon.type[0]} />
            <div className='h-full flex flex-col justify-center text-xl ml-3'>
                <Name name={pokemon.name} types={pokemon.type} />
            </div>
        </div>
    )
}

export default Card
