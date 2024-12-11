const Navbar = () => {
    return (
        <nav>
            <Link to='/src/assets/logo1.jpg'></Link>
            <ul>
                <li>
                    <Link to='/src/components/HeroSection/Hero.jsx'>Inicio</Link>
                </li>
                <li>
                    <Link>
                        Produtos
                    </Link>
                </li>
                <li>
                    <Link to='/src/components/Sobre/Sobre.jsx'>
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}