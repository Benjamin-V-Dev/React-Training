import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet9() {
    // States
    const [checkbox, setCheckbox] = useState(false);
    const [radio, setRadio] = useState('option1');
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code

    const componentCode = `
import { useState } from 'react';

export default function Projet9() {
    const [checkbox, setCheckbox] = useState(false);
    const [radio, setRadio] = useState('option1');

    return (
        <div>
            <h2>Button Radio</h2>
            <div>
                <input
                    type="radio"
                    id="radio1"
                    name="options"
                    value="option1"
                    checked={radio === 'option1'}
                    onChange={(e) => setRadio(e.target.value)}
                />
                <label htmlFor="radio1">Option 1</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="radio2"
                    name="options"
                    value="option2"
                    checked={radio === 'option2'}
                    onChange={(e) => setRadio(e.target.value)}
                />
                <label htmlFor="radio2">Option 2</label>
            </div>
            <h2>Button Checkbox: {checkbox.toString()}</h2>
            <input
                type="checkbox"
                checked={checkbox}
                onChange={(e) => setCheckbox(e.target.checked)}
            />
            <label>Checkbox</label>
        </div>
    );
}`

    return (
        <>
            <PresentationProject
                title={'Checkbox/radio useState'}
                subtitle={
                    "Récupérer la valeur d'une checkbox ou d'un radio avec useState"
                }
            />
            <div className='flex flex-col items-center mt-16 gap-2'>
                <h2 className='heading2'>Button Radio</h2>
                <div className='flex gap-2 justify-center items-center'>
                    <input
                        type='radio'
                        id='radio1'
                        name='options'
                        value='option1'
                        className='m-0'
                        checked={radio === 'option1'}
                        onChange={(e) => setRadio(e.target.value)}
                    />
                    <label htmlFor='radio1'>Option 1</label>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <input
                        type='radio'
                        id='radio2'
                        name='options'
                        value='option2'
                        className='m-0'
                        checked={radio === 'option2'}
                        onChange={(e) => setRadio(e.target.value)}
                    />
                    <label htmlFor='radio2'>Option 2</label>
                </div>
                <h2 className='heading2'>
                    Button Checkbox : {checkbox.toString()}
                </h2>
                <div className='flex gap-2 justify-center items-center'>
                    <input
                        type='checkbox'
                        id='checkbox'
                        className='m-0'
                        checked={checkbox}
                        onChange={(e) => setCheckbox(e.target.checked)}
                    />
                    <label htmlFor='checkbox'>Checkbox</label>
                </div>

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