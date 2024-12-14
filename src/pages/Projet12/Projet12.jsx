import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet12() {
     // Variables
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code
    const componentCode = `import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet12() {

    // Définition de la galerie avec un tableau d'images
    const gallery = [
        {
            index: 0, // Identifiant de l'image (index dans le tableau)
            url: 'https://docs.montagne-vacances.com/actualites/large/pourquoi-la-montagne-seduit-de-plus-en-plus-de-francais-l-ete-982.jpg',
            alt: 'Image 1', // Texte alternatif pour l'image
        },
        {
            index: 1,
            url: 'https://www.appartementcourchevel.com/wp-content/uploads/2022/06/montagne.jpg',
            alt: 'Image 2',
        },
        {
            index: 2,
            url: 'https://www.maregionsud.fr/fileadmin/_processed_/5/7/csm_SUD078789-inauguration_rocher_aigle__c_Region_Sud_Pierre-Emmanuel_TRIGO_8681473c00.jpg',
            alt: 'Image 3',
        },
    ];

    // Déclaration de l'état pour stocker l'index actuel de l'image affichée
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const handleNext = () => {
        setCurrentIndex((prevIndex) => // prevIndex est simplement un nom de variable choisi pour représenter l'état actuel avant sa mise à jour.
            // Si on est sur la dernière image, revenir à la première (index 0)
            prevIndex === gallery.length - 1 ? 0 : prevIndex + 1,
        );
    };

    // Fonction pour revenir à l'image précédente
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => // prevIndex est simplement un nom de variable choisi pour représenter l'état actuel avant sa mise à jour.
            // Si on est sur la première image, aller à la dernière
            prevIndex === 0 ? gallery.length - 1 : prevIndex - 1,
        );
    };

    return (
        <>
            <PresentationProject
                title={"Slider"}
                subtitle={"Création d'un slider avec useState"}
            />

            {/* Affichage de l'image actuelle basée sur l'index 'currentIndex' */}
            <img
                src={gallery[currentIndex].url} // URL de l'image actuelle
                alt={gallery[currentIndex].alt} // Texte alternatif de l'image
                className='block w-full aspect-video my-10'
            />

            {/* Boutons de navigation pour passer d'une image à une autre */}
            <div className='flex justify-between mb-10'>
                <button onClick={handlePrevious}>
                    {/* Appelle la fonction pour passer à l'image précédente */}
                    Précédent
                </button>
                <button onClick={handleNext}>
                    {/* Appelle la fonction pour passer à l'image suivante */}
                    Suivant
                </button>
            </div>
        </>
    );
}
`;

    // Définition de la galerie avec un tableau d'images
    const gallery = [
        {
            index: 0, // Identifiant de l'image (index dans le tableau)
            url: 'https://docs.montagne-vacances.com/actualites/large/pourquoi-la-montagne-seduit-de-plus-en-plus-de-francais-l-ete-982.jpg',
            alt: 'Image 1', // Texte alternatif pour l'image
        },
        {
            index: 1,
            url: 'https://www.appartementcourchevel.com/wp-content/uploads/2022/06/montagne.jpg',
            alt: 'Image 2',
        },
        {
            index: 2,
            url: 'https://www.maregionsud.fr/fileadmin/_processed_/5/7/csm_SUD078789-inauguration_rocher_aigle__c_Region_Sud_Pierre-Emmanuel_TRIGO_8681473c00.jpg',
            alt: 'Image 3',
        },
    ];

    // Déclaration de l'état pour stocker l'index actuel de l'image affichée
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const handleNext = () => {
        setCurrentIndex((prevIndex) => // prevIndex est simplement un nom de variable choisi pour représenter l'état actuel avant sa mise à jour.
            // Si on est sur la dernière image, revenir à la première (index 0)
            prevIndex === gallery.length - 1 ? 0 : prevIndex + 1,
        );
    };

    // Fonction pour revenir à l'image précédente
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => // prevIndex est simplement un nom de variable choisi pour représenter l'état actuel avant sa mise à jour.
            // Si on est sur la première image, aller à la dernière
            prevIndex === 0 ? gallery.length - 1 : prevIndex - 1,
        );
    };

    return (
        <>
            <PresentationProject
                title={'Slider'}
                subtitle={"Création d'un slider avec useState"}
            />

            {/* Affichage de l'image actuelle basée sur l'index `currentIndex` */}
            <img
                src={gallery[currentIndex].url} // URL de l'image actuelle
                alt={gallery[currentIndex].alt} // Texte alternatif de l'image
                className='block w-full aspect-video my-10'
            />

            {/* Boutons de navigation pour passer d'une image à une autre */}
            <div className='flex justify-between mb-10'>
                <button onClick={handlePrevious}>
                    {/* Appelle la fonction pour passer à l'image précédente */}
                    Précédent
                </button>
                <button onClick={handleNext}>
                    {/* Appelle la fonction pour passer à l'image suivante */}
                    Suivant
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
