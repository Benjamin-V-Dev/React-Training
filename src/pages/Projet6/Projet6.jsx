import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet6() {
    // States
    const [state, setState] = useState(true);

    // Variables
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code
    const componentCode = `import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet6() {
    // States
    const [state, setState] = useState(true);

    return (
        <>
            <PresentationProject
                title={'Switch'}
                subtitle={'Gérer un switch avec prevState'}
            />
            <div className='flex flex-col items-center mt-16'>
                <p>{state ? 'Je suis  : True' : 'Je suis : False'}</p>
                <button
                    /* onClick, on chage le state avec setState, et on vérifie le state précédent avant de modifier pour éviter les bugs */
                    onClick={() => {
                        setState((prevState) => !prevState);
                    }}>
                    Ajouter
                </button>
            </div>
        </>
    );
}
`

    return (
        <>
            <PresentationProject
                title={'Switch'}
                subtitle={'Gérer un switch avec prevState'}
            />
            <div className='flex flex-col items-center mt-16'>
                <p>{state ? 'Je suis  : True' : 'Je suis : False'}</p>
                <button
                    /* onClick, on chage le state avec setState, et on vérifie le state précédent avant de modifier pour éviter les bugs */
                    onClick={() => {
                        setState((prevState) => !prevState);
                    }}>
                    Ajouter
                </button>
            </div>
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
