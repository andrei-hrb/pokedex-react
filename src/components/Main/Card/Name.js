const Name = ({ name, types }) => {
    const emojis = {
        bug: 'ð',
        dark: 'ðââŽ',
        dragon: 'ð',
        electric: 'âĄ',
        fairy: 'ð§',
        fighting: 'ðĨ',
        fire: 'ðĨ',
        flying: 'ðŠķ',
        ghost: 'ðŧ',
        grass: 'ðŋ',
        ground: 'ðą',
        ice: 'ð§',
        normal: 'ð',
        poison: 'â ïļ',
        psychic: 'ðŪ',
        rock: 'ðŠĻ',
        steel: 'ðĶū',
        water: 'ð§',
    }

    return (
        <>
            <h3 className='mb-1'>{name}</h3>
            <h6>{types.map((t) => emojis[t.toLowerCase()])}</h6>
        </>
    )
}

export default Name
