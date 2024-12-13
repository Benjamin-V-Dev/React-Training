import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

// On importe ReactHookForm
import { useForm } from 'react-hook-form';

export default function Projet5() {
    /* Utilisation de ReactHookForm pour gérer l'input : Optimisé et trés performant, mais alourdit le projet car c'est une librairie supplémentaire */

    // Variables
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code
    const componentCode = `import PresentationProject from '../../components/PresentationProject';

// On importe ReactHookForm
import { useForm } from 'react-hook-form';

export default function Projet5() {
    /* Utilisation de ReactHookForm pour gérer l'input : Optimisé et trés performant, mais alourdit le projet car c'est une librairie supplémentaire */

    // On initialise ReactHookForm :
    // - "register", qui permet d'enregistrer des champs du formulaire
    // - "handleSubmit", qui permet de gèrer l'envoie des champs du formulaire
    // - "formState : {errors}", qui permet de gèrer les erreurs
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Functions
    const onSubmit = (data) => {
        // Pas besoin de e.preventDefault

        // On utilise Data pour récupérer les valeurs des inputs
        console.log(data);
    };
    return (
        <>
            <PresentationProject
                title={'ContactForm'}
                subtitle={'Gérer un input avec ReactHookForm'}
            />
            {/* On englobe "onSubmit" dans "handleSubmit" de ReactHookForm */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Input : Name */}
                <label htmlFor='name-input'>Name</label>
                <input
                    type='text'
                    placeholder='Entrez votre nom'
                    id='name-input'
                    // J'utilise "register" de ReactHookForm
                    {...register('name', {
                        required: true,
                        minLength: {
                            value: 3,
                            message:
                                'Votre nom doit faire au moins 3 caractère',
                        },
                        maxLength: {
                            value: 10,
                            message:
                                'Votre nom doit faire moins de 10 caractère',
                        },
                    })}
                />
                {errors.name && (
                    <p className='text-blue-500 font-bold'>
                        {errors.name.message}
                    </p>
                )}

                {/* Input : Mail */}
                <label htmlFor='mail-input'>Mail</label>
                <input
                    type='email'
                    placeholder='Entrez votre nom'
                    id='mail-input'
                    // J'utilise "register" de ReactHookForm
                    {...register('mail', {
                        required: true,
                        pattern: {
                            value: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i', //REGEX d'un email
                            message: 'Veuillez entrer une adresse email valide',
                        },
                    })}
                />
                {errors.name && (
                    <p className='text-blue-500 font-bold'>
                        {errors.name.mail}
                    </p>
                )}
                <button>Submit</button>
            </form>
        </>
    );
}
`;

    // On initialise ReactHookForm :
    // - "register", qui permet d'enregistrer des champs du formulaire
    // - "handleSubmit", qui permet de gèrer l'envoie des champs du formulaire
    // - "formState : {errors}", qui permet de gèrer les erreurs
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Functions
    const onSubmit = (data) => {
        // Pas besoin de e.preventDefault

        // On utilise Data pour récupérer les valeurs des inputs
        console.log(data);
    };
    return (
        <>
            <PresentationProject
                title={'ContactForm'}
                subtitle={'Gérer un input avec ReactHookForm'}
            />
            {/* On englobe "onSubmit" dans "handleSubmit" de ReactHookForm */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Input : Name */}
                <label htmlFor='name-input'>Name</label>
                <input
                    type='text'
                    placeholder='Entrez votre nom'
                    id='name-input'
                    // J'utilise "register" de ReactHookForm
                    {...register('name', {
                        required: true,
                        minLength: {
                            value: 3,
                            message:
                                'Votre nom doit faire au moins 3 caractère',
                        },
                        maxLength: {
                            value: 10,
                            message:
                                'Votre nom doit faire moins de 10 caractère',
                        },
                    })}
                />
                {errors.name && (
                    <p className='text-blue-500 font-bold'>
                        {errors.name.message}
                    </p>
                )}

                {/* Input : Mail */}
                <label htmlFor='mail-input'>Mail</label>
                <input
                    type='email'
                    placeholder='Entrez votre nom'
                    id='mail-input'
                    // J'utilise "register" de ReactHookForm
                    {...register('mail', {
                        required: true,
                        pattern: {
                            value: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i', //REGEX d'un email
                            message: 'Veuillez entrer une adresse email valide',
                        },
                    })}
                />
                {errors.name && (
                    <p className='text-blue-500 font-bold'>
                        {errors.name.mail}
                    </p>
                )}
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
