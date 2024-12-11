import React from "react";
import saboneteImage from '/public/saboneteheroi2.jpg';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center">
            {/* Texto e Botões */}
            <div className="flex-1 max-w-2xl px-8 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-semibold">
                    Sabonetes artesanais
                </h1>
                <p className="text-gray-700 text-lg mt-4 max-w-xl mx-auto md:mx-0">
                    Sabonetes artesanais feitos sob encomenda. Nossos produtos
                    são totalmente naturais com propriedades relaxantes e mais gentis com a sua pele.
                    Presenteie seu corpo com um sabonete de açúcar mascavo!
                </p>
                <div className="flex gap-8 font-semibold mt-8 justify-center md:justify-start">
                    <button
                        type="button"
                        className="bg-green-900 active:scale-[0.97] hover:bg-green-800 transition rounded-md text-white px-4 py-2 shadow-xl">
                        Nossos produtos
                    </button>
                    <button
                        className="text-green-900 active:scale-[0.97] hover:text-black transition"
                        type="button">
                        Fazer pedido
                    </button>
                </div>
            </div>

            {/* Imagem */}
            <div className="flex-1 md:mt-0">
                <img 
                    src={saboneteImage} 
                    alt="Imagem de sabonete artesanal" 
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default Hero;
