import { useState, useRef } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet3() {
    /* Utilisation de useRef pour gérer l'input : Optimisé car on n'utilise pas de state mis à jour à chaque fois et mieux pour les messages d'erreur (UX) */

    // State
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code

    // Refs
    const input = useRef();

    // Functions
    const onSubmit = (e) => {
        e.preventDefault();

        // J'utilise le ref (input) pour récupérer la data avec "input.current.value"
        console.log(input.current.value);

        // On peut reset le formulaire avec :
        e.target.reset();
    };

    // Code source du composant
    const componentCode = `
import { useRef } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet3() {
    /* Utilisation de useRef pour gérer l'input : Optimisé car on n'utilise pas de state mis à jour à chaque fois et mieux pour les messages d'erreur (UX) */

    // Refs
    const input = useRef();

    // Functions
    const onSubmit = (e) => {
        e.preventDefault();

        // J'utilise le ref (input) pour récupérer la data avec "input.current.value"
        console.log(input.current.value);

        // On peut reset le formulaire avec :
        e.target.reset();
    };

    return (
        <>
            <PresentationProject
                title={'ContactForm'}
                subtitle={'Gérer un input avec useRef'}
            />
            <form onSubmit={onSubmit}>
                <label htmlFor='name-input'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name-input'
                    required
                    /* On ajoute ici la référence */
                    ref={input}
                />
                <button>Submit</button>
            </form>
        </>
    );
}`;

    return (
        <>
            <PresentationProject
                title={'ContactForm'}
                subtitle={'Gérer un input avec useRef'}
            />
            <form
                onSubmit={onSubmit}
                className='flex flex-col items-center gap-4'>
                <label htmlFor='name-input'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name-input'
                    required
                    className='p-2 border border-gray-300 rounded'
                    /* On ajoute ici la référence */
                    ref={input}
                />
                <button className='p-2 bg-green-500 text-white rounded'>
                    Submit
                </button>
            </form>
            <div className='flex justify-center'>
                {/* Bouton pour afficher ou masquer le code */}
                <button
                    className='mt-4 mx-auto p-2 bg-blue-500 text-white rounded'
                    onClick={() => setShowCode(!showCode)}>
                    {showCode ? 'Masquer le code' : 'Afficher le code'}
                </button>
            </div>

            {/* Bloc de code */}
            {showCode && (
                <pre className='mt-4 p-4 bg-gray-200 rounded text-sm w-full overflow-x-auto'>
                    <code>{componentCode}</code>
                </pre>
            )}
        </>
    );
}

export async function loader() {
    return (
        <div className='h-screen flex items-center justify-center w-full'>
            Loading ...
        </div>
    );
}
