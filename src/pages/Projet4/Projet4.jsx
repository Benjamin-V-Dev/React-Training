import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet4() {
    /* Utilisation de formData pour gérer l'input : Optimisé car on utilise pas de state mis à jour à chaque fois mais plus limité que useRef pour l'UX */

    // Variables
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code

    const componentCode = `import PresentationProject from '../../components/PresentationProject';

export default function Projet4() {
    /* Utilisation de formData pour gérer l'input : Optimisé car on utilise pas de state mis à jour à chaque fois mais plus limité que useRef pour l'UX */

    // Functions
    const onSubmit = (e) => {
        e.preventDefault();

        // J'initialise mon FormData
        const data = new FormData(e.target);

        // J'utilise le name (nameOfMyInput) pour récupérer la data avec "get"
        console.log(data.get("nameOfMyInput"));

        // On peut reset le formulaire avec :
        e.target.reset()
    };

    return (
        <>
            <PresentationProject
                title={'ContactForm'}
                subtitle={'Gérer un input avec formData'}
            />
            <form onSubmit={onSubmit}>
                <label htmlFor='name-input'>Name</label>
                <input
                    type='text'
                    id='name-input'
                    required
                    /* On ajoute ici le name */
                    name='nameOfMyInput'
                />
                <button>Submit</button>
            </form>
        </>
    );
}
`;

    // Functions
    const onSubmit = (e) => {
        e.preventDefault();

        // J'initialise mon FormData
        const data = new FormData(e.target);

        // J'utilise le name (nameOfMyInput) pour récupérer la data avec "get"
        console.log(data.get('nameOfMyInput'));

        // On peut reset le formulaire avec :
        e.target.reset();
    };

    return (
        <>
            <PresentationProject
                title={'ContactForm'}
                subtitle={'Gérer un input avec formData'}
            />
            <form onSubmit={onSubmit}>
                <label htmlFor='name-input'>Name</label>
                <input
                    type='text'
                    id='name-input'
                    required
                    /* On ajoute ici le name */
                    name='nameOfMyInput'
                />
                <button>Submit</button>
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
