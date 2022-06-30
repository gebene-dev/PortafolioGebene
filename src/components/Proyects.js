import React from 'react';
import ProyectCards from './ProyectCards';
import GebenePage from '../images/gebene.PNG';
import DominoPage from '../images/domino.PNG';
import giphyPage from '../images/giphyapp.PNG';
import GitHubLogo from '../images/github.svg';
import Contacto from './Contacto';

export default function Proyects() {
  return (
      <>
      
      <section className="bg-white dark:bg-gray-800">
            <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Mis Proyectos</h1>
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>
            </div>

            <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <ProyectCards
                        photo={GebenePage}
                        nombreProyecto="Gebene Web Page"
                        descripcion="La página web que estás viendo ahora mismo"
                        logoSvg={GitHubLogo}
                    />
                    <ProyectCards
                        photo={DominoPage}
                        nombreProyecto="Domino"
                        descripcion="E-commerce hecho con JavaScript, HTML y CSS en Front, Node.Js, MySQL, Sequelize en Back-end."
                        logoSvg={GitHubLogo}
                    />
                    <ProyectCards
                        photo={giphyPage}
                        nombreProyecto="Giphy App"
                        descripcion="Pagina generadora de gifs random hecha en React con consumición de la API de Giphy."
                        logoSvg={GitHubLogo}
                    />
                </div>
            </div>
            <Contacto/>
        </section>
      </>
  );
}
