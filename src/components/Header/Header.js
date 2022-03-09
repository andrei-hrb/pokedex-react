import DarkMode from './DarkMode'

import pika from '../../assets/pika.gif'

const Header = () => (
    <header className='flex justify-center relative'>
        <h2 className='inline text-3xl md:text-5xl font-black'>ポケモン図鑑</h2>
        <div className='bg-pika bg-cover w-8 h-8 md:w-12 md:h-12 ml-2'></div>

        <div className='absolute md:top-1/4 right-0 text-2xl sm:text-lg'>
            <DarkMode />
        </div>
    </header>
)

export default Header
