import Link from './Link'

const Footer = () => (
    <footer className='text-center text-xs mt-5'>
        <code>
            Crafted in 2022 by{' '}
            <Link href={'https://hirbu.ro/'} content={'Hîrbu Andrei'} /> for
            Bytex's React practice (FIIPractic). Check the{' '}
            <Link
                href={'https://github.com/andrei-hrb/pokedex-react'}
                content={'source code'}
            />{' '}
            on Github.
        </code>
    </footer>
)

export default Footer
