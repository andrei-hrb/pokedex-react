import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const initialPokemon = require('./data/pokedex.json')['pokemon']

const App = () => (
    <div className='p-4 sm:text-base font-mono dark:bg-slate-800 dark:text-white min-h-screen'>
        <Header />
        <Main initial={initialPokemon} />
        <Footer />
    </div>
)

export default App
