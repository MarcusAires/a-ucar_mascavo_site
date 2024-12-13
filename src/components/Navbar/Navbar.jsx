import React from "react";
import logo from '../../assets/file.png';
import { Link, Links } from 'react-router-dom';
import Img from 'react'



const Navbar = () => {
    return (
        <nav className="bg-primary-dark text-white flex justify-between items-stretch gap-8 p-4 text-xl">
            <Link to='../HeroSection/Hero.jsx' className="text-4xl font-semibold">
            Açúcar Mascavo
            </Link>
            <ul className="p-o m-0 list-none flex gap-4">
                <li className="active:bg-primary hover:bg-primary h-full">
                    <Link
                        to='/src/components/HeroSection/Hero.jsx'
                        className="h-full flex items-center p-1"
                    >
                        Inicio
                    </Link>
                </li>
                <li className="active:bg-primary hover:bg-primary h-full">
                    <Link
                        to='../Produtos/Produtos.jsx'
                        className="h-full flex items-center p-1"
                    >
                        Produtos
                    </Link>
                </li>
                <li className="active:bg-primary hover:bg-primary h-full">
                    <Link
                        to='/src/components/Sobre/Sobre.jsx'    
                        className="h-full flex items-center p-1"
                    >
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;