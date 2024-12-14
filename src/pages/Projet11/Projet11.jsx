import { useRef, useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet11() {
    // Variables
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code
    const componentCode = `import { useRef, useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet11() {

    // States
    const [imc, setImc] = useState(null);
    const [message, setMessage] = useState('');

    // Refs
    const weight = useRef();
    const height = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        // Récupération des valeurs des inputs
        const weightValue = parseFloat(weight.current.value);
        const heightValue = parseFloat(height.current.value) / 100; // Conversion en mètres

        if (!weightValue || !heightValue) {
            alert('Veuillez entrer des valeurs valides !');
            return;
        }

        // Calcul de l'IMC
        const calculatedIMC = (weightValue / heightValue ** 2).toFixed(2); // Limiter à 2 décimales
        setImc(calculatedIMC);

        // Déterminer le message associé
        if (calculatedIMC < 18.5) {
            setMessage('Insuffisance pondérale.');
        } else if (calculatedIMC >= 18.5 && calculatedIMC < 25) {
            setMessage('Poids normal.');
        } else if (calculatedIMC >= 25 && calculatedIMC < 30) {
            setMessage('Surpoids.');
        } else if (calculatedIMC >= 30 && calculatedIMC < 35) {
            setMessage('Obésité modérée.');
        } else if (calculatedIMC >= 35 && calculatedIMC < 40) {
            setMessage('Obésité sévère.');
        } else if (calculatedIMC >= 40) {
            setMessage('Obésité morbide.');
        }
    };

    return (
        <>
            <PresentationProject
                title={"Calculatrice d'IMC"}
                subtitle={"Création d'une calculatrice d'IMC sans DB"}
            />
            <form>
                {/* Input poids */}
                <label htmlFor='input-weight'>Poids (en Kg) :</label>
                <input
                    id='input-weight'
                    type='number'
                    min={0}
                    ref={weight}
                    required
                />

                {/* Input taille */}
                <label htmlFor='input-height'>Taille (en cm) :</label>
                <input
                    id='input-height'
                    type='number'
                    min={0}
                    ref={height}
                    required
                />

                {/* Submit */}
                <button onClick={onSubmit}>Calculer</button>
            </form>

            {/* Affichage des résultats */}
            {imc && (
                <div className='text-center'>
                    <p>Votre IMC : {imc}</p>
                    <p>Résultat : {message}</p>
                </div>
            )}
        </>
    );
}
`;

    // States
    const [imc, setImc] = useState(null);
    const [message, setMessage] = useState('');

    // Refs
    const weight = useRef();
    const height = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        // Récupération des valeurs des inputs
        const weightValue = parseFloat(weight.current.value);
        const heightValue = parseFloat(height.current.value) / 100; // Conversion en mètres

        if (!weightValue || !heightValue) {
            alert('Veuillez entrer des valeurs valides !');
            return;
        }

        // Calcul de l'IMC
        const calculatedIMC = (weightValue / heightValue ** 2).toFixed(2); // Limiter à 2 décimales
        setImc(calculatedIMC);

        // Déterminer le message associé
        if (calculatedIMC < 18.5) {
            setMessage('Insuffisance pondérale.');
        } else if (calculatedIMC >= 18.5 && calculatedIMC < 25) {
            setMessage('Poids normal.');
        } else if (calculatedIMC >= 25 && calculatedIMC < 30) {
            setMessage('Surpoids.');
        } else if (calculatedIMC >= 30 && calculatedIMC < 35) {
            setMessage('Obésité modérée.');
        } else if (calculatedIMC >= 35 && calculatedIMC < 40) {
            setMessage('Obésité sévère.');
        } else if (calculatedIMC >= 40) {
            setMessage('Obésité morbide.');
        }
    };

    return (
        <>
            <PresentationProject
                title={"Calculatrice d'IMC"}
                subtitle={"Création d'une calculatrice d'IMC sans DB"}
            />
            <form>
                {/* Input poids */}
                <label htmlFor='input-weight'>Poids (en Kg) :</label>
                <input
                    id='input-weight'
                    type='number'
                    min={0}
                    ref={weight}
                    required
                />

                {/* Input taille */}
                <label htmlFor='input-height'>Taille (en cm) :</label>
                <input
                    id='input-height'
                    type='number'
                    min={0}
                    ref={height}
                    required
                />

                {/* Submit */}
                <button onClick={onSubmit}>Calculer</button>
            </form>

            {/* Affichage des résultats */}
            {imc && (
                <div className='text-center'>
                    <p>Votre IMC : {imc}</p>
                    <p>Résultat : {message}</p>
                </div>
            )}

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
