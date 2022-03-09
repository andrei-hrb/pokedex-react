import DarkMode from './DarkMode'

import pika from '../../assets/pika.gif'

const Header = () => (
    <header className='flex baseline justify-center relative'>
        <h2 className='inline text-5xl font-black'>ポケモン図鑑</h2>
        <img className='inline ml-2' src={pika} />
        <div className='absolute top-1/4 right-0 text-2xl'>
            <DarkMode />
        </div>
    </header>
)

export default Header
