import React from 'react';
import LengCards from './LengCards';
import HTML from '../images/html.svg';
import CSS from '../images/css.svg';
import JS from '../images/js.svg';
import Node from '../images/node.svg'
import MySql from '../images/sql.svg'
import BootStrap from '../images/boot.svg'
import ReactLogo from '../images/react.svg'
import TailwindLogo from '../images/tailwind.svg'
import ExpressLogo from '../images/express.svg'
import gitLogo from '../images/git.svg';
import sequelizeLogo from '../images/sequelize.svg'
import postmanLogo from '../images/postman.svg'

export default function Lenguages(props) {
  return (
      <>
        <section className="bg-white dark:bg-gray-900" id="tecnologias">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">Tecnologías que utilizo</h1> 
                <div className="grid grid-cols-5 mt-10">
                <LengCards
                    title="HTML"
                    logo={HTML}
                />
                <LengCards
                    title="CSS"
                    logo={CSS}
                />
                <LengCards
                    title="JavaScript"
                    logo={JS}
                />
                <LengCards
                    title="Node.JS"
                    logo={Node}
                />
                <LengCards
                    title="MySQL"
                    logo={MySql}
                />
                <LengCards
                    title="Bootstrap"
                    logo={BootStrap}
                />
                <LengCards
                    title="React"
                    logo={ReactLogo}
                />
                <LengCards
                    title="Tailwind"
                    logo={TailwindLogo}
                />
                <LengCards
                    title="Express"
                    logo={ExpressLogo}
                />
                <LengCards
                    title="Git"
                    logo={gitLogo}
                />
                <LengCards
                    title="Sequelize"
                    logo={sequelizeLogo}
                />
                <LengCards
                    title="Postman"
                    logo={postmanLogo}
                />
                </div> 
            </div>
        </section>
      </>
  );
}
