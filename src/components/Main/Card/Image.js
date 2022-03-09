import { useState, useEffect } from 'react'

const importAll = (r) => {
    let images = {}
    r.keys().map((item) => {
        images[item.replace('./', '')] = r(item)
    })
    return images
}

const Image = ({ type, id }) => {
    const [images, setImages] = useState([])

    const backgroundColors = {
        bug: 'bg-[#A6B91A]',
        dark: 'bg-[#705746]',
        dragon: 'bg-[#6F35FC]',
        electric: 'bg-[#F7D02C]',
        fairy: 'bg-[#D685AD]',
        fighting: 'bg-[#C22E28]',
        fire: 'bg-[#EE8130]',
        flying: 'bg-[#A98FF3]',
        ghost: 'bg-[#735797]',
        grass: 'bg-[#7AC74C]',
        ground: 'bg-[#E2BF65]',
        ice: 'bg-[#96D9D6]',
        normal: 'bg-[#A8A77A]',
        poison: 'bg-[#A33EA1]',
        psychic: 'bg-[#F95587]',
        rock: 'bg-[#B6A136]',
        steel: 'bg-[#B7B7CE]',
        water: 'bg-[#6390F0]',
    }

    useEffect(() => {
        setImages(
            importAll(
                require.context('../../../assets/pokemons', false, /\.(png)$/),
            ),
        )
    }, [])

    return (
        <img
            className={backgroundColors[type.toLowerCase(0)] + ' border-r'}
            src={images[id + '.png']}
            loading='lazy'
        />
    )
}

export default Image
