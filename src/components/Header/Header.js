import DarkMode from './DarkMode'

import pika from '../../assets/pika.gif'

const Header = () => (
    <header className='flex baseline justify-center relative'>
        <h2 className='inline text-5xl sm:text-2xl font-black'>ポケモン図鑑</h2>
        <img className='inline ml-2' src={pika} alt='pika greeting' />
        <div className='absolute top-1/4 right-0 text-2xl sm:text-lg'>
            <DarkMode />
        </div>
    </header>
)

export default Header
