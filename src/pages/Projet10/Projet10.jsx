import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet10() {
    const string = 'Hello, World';
    const stringA = 'Hello';
    const stringB = 'World';

    const numberA = 3.1846374;
    const stringNumber = '42';
    const stringNumber2 = '3.1846374';
    return (
        <>
            <PresentationProject
                title={'Méthodes Javascript'}
                subtitle={'Méthodes Javascript les plus utiles'}
            />
            <div className='my-10'>
                <h2 className='heading2 text-center'>Strings :</h2>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col gap-4'>
                        <p>
                            <span className='bg-blue-100 p-2 rounded-md me-2'>
                                charAt(index)
                            </span>
                            : Renvoie le caractère à la position spécifiée.
                        </p>
                        <pre>
                            <code>{`{string} → {string.charAt(0)}`}</code>
                        </pre>
                        <p>
                            {string} → {string.charAt(0)}
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>
                            <span className='bg-blue-100 p-2 rounded-md me-2'>
                                includes(substring)
                            </span>
                            : Vérifie si une chaîne contient une sous-chaîne
                            donnée et retourne un boolean.
                        </p>
                        <pre>
                            <code>{`{string} → {string.includes('H').toString()} // toString sert juste pour l'afficher dans l'exemple`}</code>
                        </pre>
                        <p>
                            {string} → {string.includes('H').toString()}
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>
                            <span className='bg-blue-100 p-2 rounded-md me-2'>
                                indexOf(substring)
                            </span>
                            : Renvoie l'index de la première occurrence de la
                            sous-chaîne, ou -1 si non trouvée.
                        </p>
                        <pre>
                            <code>{`{string} → {string.indexOf('H')}`}</code>
                        </pre>
                        <p>
                            {string} → {string.indexOf('H')}
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>
                            <span className='bg-blue-100 p-2 rounded-md me-2'>
                                toUpperCase()
                            </span>
                            : Convertit la chaîne en majuscules.
                        </p>
                        <pre>
                            <code>{`{string} → {string.toUpperCase()}`}</code>
                        </pre>
                        <p>
                            {string} → {string.toUpperCase()}
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>
                            <span className='bg-blue-100 p-2 rounded-md me-2'>
                                slice(start, end)
                            </span>
                            : Extrait une partie de la chaîne entre start et
                            end.
                        </p>
                        <pre>
                            <code>{`{string} → {string.slice(0, 5)}`}</code>
                        </pre>
                        <p>
                            {string} → {string.slice(0, 5)}
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>
                            <span className='bg-blue-100 p-2 rounded-md me-2'>
                                split(separator)
                            </span>
                            : Divise la chaîne en un tableau de sous-chaînes
                            selon un séparateur.
                        </p>
                        <pre>
                            <code>{`{string} → {string.split(",")}`}</code>
                        </pre>
                        <p>
                            {string} → {string.split(',')}
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>
                            <span className='bg-blue-100 p-2 rounded-md me-2'>
                                replace(pattern, value)
                            </span>
                            : Remplace une partie correspondante de la chaîne
                            par une autre valeur.
                        </p>
                        <pre>
                            <code>{`{string} → {string.replace('Hello', 'Hola')}`}</code>
                        </pre>
                        <p>
                            {string} → {string.replace('Hello', 'Hola')}
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>
                            <span className='bg-blue-100 p-2 rounded-md me-2'>
                                trim()
                            </span>
                            : Supprime les espaces blancs au début et à la fin
                            d'une chaîne.
                        </p>
                        <pre>
                            <code>{`{string} → {string.trim()} // Pas visible ici mais la syntax est la bonne`}</code>
                        </pre>
                        <p>
                            {string} → {string.trim()}
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>
                            <span className='bg-blue-100 p-2 rounded-md me-2'>
                                concat(string)
                            </span>
                            : Concatène deux chaînes.
                        </p>
                        <pre>
                            <code>{`{stringA} {stringB} → {stringA.concat(" ", stringB)}`}</code>
                        </pre>
                        <p>
                            {stringA} {stringB} → {stringA.concat(' ', stringB)}
                        </p>
                    </div>
                </div>
                <h2 className='heading2 text-center'>Numbers :</h2>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-4'>
                            <p>
                                <span className='bg-blue-100 p-2 rounded-md me-2'>
                                    toFixed(digits)
                                </span>
                                : Formate le nombre avec un nombre spécifié de
                                chiffres après la virgule.
                            </p>
                            <pre>
                                <code>{`{numberA} → {numberA.toFixed(2)}`}</code>
                            </pre>
                            <p>
                                {numberA} → {numberA.toFixed(2)}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-4'>
                            <p>
                                <span className='bg-blue-100 p-2 rounded-md me-2'>
                                    parseInt(string)
                                </span>
                                : Analyse une chaîne et renvoie un entier (pour
                                passer un string "42" vers un int 42 par
                                exemple).
                            </p>
                            <pre>
                                <code>{`{stringNumber} → {parseInt(stringNumber, 10)} / {parseInt(stringNumber, 16)} // Retourne 42 en base numérique (10) ou 66 en base Héxa (16)`}</code>
                            </pre>
                            <p>
                                {stringNumber} → {parseInt(stringNumber, 10)} /{' '}
                                {parseInt(stringNumber, 16)}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-4'>
                            <p>
                                <span className='bg-blue-100 p-2 rounded-md me-2'>
                                    parseFloat(string)
                                </span>
                                : Analyse une chaîne et renvoie un nombre à
                                virgule flottante. (pour passer un string
                                "3.1846374" vers un float 3.1846374 par
                                exemple).
                            </p>
                            <pre>
                                <code>{`{stringNumber2} → {parseFloat(stringNumber2, 10)}`}</code>
                            </pre>
                            <p>
                                {stringNumber2} →{' '}
                                {parseFloat(stringNumber2, 10)}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-4'>
                            <p>
                                <span className='bg-blue-100 p-2 rounded-md me-2'>
                                    isNaN(value){' '}
                                </span>
                                : Vérifie si la valeur est NaN (Not-a-Number).
                            </p>
                            <pre>
                                <code>{`{stringNumber2} → {parseFloat(stringNumber2, 10)}`}</code>
                            </pre>
                            <p>
                                {stringNumber} →{' '}
                                {isNaN(stringNumber).toString()}
                            </p>
                        </div>
                    </div>
                </div>
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
