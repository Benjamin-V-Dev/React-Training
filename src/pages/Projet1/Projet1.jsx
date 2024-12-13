import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet1() {
    const [count, setCount] = useState(0);
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code

    const componentCode = `
import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet1() {
    const [count, setCount] = useState(0);
    return (
        <>
            <PresentationProject
                title={'Counter'}
                subtitle={'Générer un compteur avec useState'}
            />
            <div className='flex flex-col items-center mt-16'>
                <p>Mon compteur : {count}</p>
                <button onClick={() => setCount(count + 1)}>Ajouter</button>
            </div>
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
`;

    return (
        <>
            <PresentationProject
                title={'Counter'}
                subtitle={'Générer un compteur avec useState'}
            />
            <div className='flex flex-col items-center mt-16'>
                <p>Mon compteur : {count}</p>
                <button
                    onClick={() => setCount(count + 1)}
                    className='p-2 bg-blue-500 text-white rounded mt-2'>
                    Ajouter
                </button>

                {/* Bouton pour afficher ou masquer le code */}
                <button
                    className='mt-4 p-2 bg-blue-500 text-white rounded'
                    onClick={() => setShowCode(!showCode)}>
                    {showCode ? 'Masquer le code' : 'Afficher le code'}
                </button>

                {/* Bloc de code */}
                {showCode && (
                    <pre className='mt-4 p-4 bg-gray-200 rounded text-sm w-full overflow-x-auto'>
                        <code>{componentCode}</code>
                    </pre>
                )}
            </div>
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
