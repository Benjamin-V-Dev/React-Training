import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet2() {
    /* Utilisation de useState pour gérer l'input (two way binding) : Pas obtimisé car engendre de nombreuses réinitialisation du state et pas térrible pour la validation des erreurs (UX)*/

    // States
    const [input, setInput] = useState('');
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code

    const componentCode = `import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet2() {
    /* Utilisation de useState pour gérer l'input (two way binding) : Pas obtimisé car engendre de nombreuses réinitialisation du state et pas térrible pour la validation des erreurs (UX)*/

    // States
    const [input, setInput] = useState('');

    // Functions
    const onSubmit = (e) => {
        e.preventDefault();

        // J'utilise le state (input) pour récupérer la data
        console.log(input);

        // On peut reset le formulaire avec :
        e.target.reset();
    };

    return (
        <>
            <PresentationProject
                title={'ContactForm'}
                subtitle={'Gérer un input avec useState'}
            />
            <form onSubmit={onSubmit}>
                <label htmlFor='name-input'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name-input'
                    required
                    /* On ajoute ici la value (mon state), et on change la value avec onChange */
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button>Submit</button>
            </form>

            <p className='text-center'>Mon state : {input}</p>
        </>
    );
}
`;

    // Functions
    const onSubmit = (e) => {
        e.preventDefault();

        // J'utilise le state (input) pour récupérer la data
        console.log(input);

        // On peut reset le formulaire avec :
        e.target.reset();
    };

    return (
        <>
            <PresentationProject
                title={'ContactForm'}
                subtitle={'Gérer un input avec useState'}
            />
            <form onSubmit={onSubmit}>
                <label htmlFor='name-input'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name-input'
                    required
                    /* On ajoute ici la value (mon state), et on change la value avec onChange */
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button>Submit</button>
            </form>

            <p className='text-center'>Mon state : {input}</p>

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
