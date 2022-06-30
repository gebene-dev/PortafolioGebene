import React from 'react';
import ConctactoLogo from './ConctactoLogo';
import gmailLogo from '../images/gmail.svg';
import githubLogo from '../images/github.svg';
import linkedinLogo from '../images/linkedin.svg'

export default function Contacto() {
  return (
      <>
        <footer className="bg-white dark:bg-gray-900 w-full py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <h1 className="text-center text-white text-xl">¡Contactame!</h1>
                <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
                    <ConctactoLogo
                        svgLogo={gmailLogo}
                        link="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJvkXbSzgZKHtdGVfbgqJnQnMBpndFXGxZsvPbbSwMVrWgqHjrCBfCMsLVZPgcFNJSMhPmg"
                    />
                    <ConctactoLogo
                        svgLogo={githubLogo}
                        link="https://github.com/gebene-dev"
                    />
                    <ConctactoLogo
                        svgLogo={linkedinLogo}
                        link="https://www.linkedin.com/in/brian-gim/"
                    />                    
                </div>
                <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
                    Creado por Gebene en React + Tailwind
                </div>
            </div>
        </footer>
      </>
  );
}
