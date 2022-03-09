const Name = ({ name, types }) => {
    const emojis = {
        bug: '🐛',
        dark: '🐈‍⬛',
        dragon: '🐉',
        electric: '⚡',
        fairy: '🧚',
        fighting: '🥊',
        fire: '🔥',
        flying: '🪶',
        ghost: '👻',
        grass: '🌿',
        ground: '🌱',
        ice: '🧊',
        normal: '👌',
        poison: '☠️',
        psychic: '🔮',
        rock: '🪨',
        steel: '🦾',
        water: '💧',
    }

    return (
        <>
            <h3 className='mb-1'>{name}</h3>
            <h6>{types.map((t) => emojis[t.toLowerCase()])}</h6>
        </>
    )
}

export default Name
