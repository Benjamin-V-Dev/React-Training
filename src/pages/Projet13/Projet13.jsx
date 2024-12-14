import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet13() {
    // Variables
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code
    const componentCode = `import { useState } from 'react';
import PresentationProject from '../../components/PresentationProject';

export default function Projet13() {

    // Données du dropdown
    const contents = [
        {
            title: 'Item 1',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam ullam perferendis fugit nostrum vitae! Sequi laboriosam ullam vel nostrum non, autem error deleniti! At nulla commodi animi sit numquam delectus quod natus beatae vitae tempora quae itaque repellendus amet consequuntur incidunt, excepturi magnam perferendis? Iste voluptates aliquam exercitationem magni?',
        },
        {
            title: 'Item 2',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam ullam perferendis fugit nostrum vitae! Sequi laboriosam ullam vel nostrum non, autem error deleniti! At nulla commodi animi sit numquam delectus quod natus beatae vitae tempora quae itaque repellendus amet consequuntur incidunt, excepturi magnam perferendis? Iste voluptates aliquam exercitationem magni?',
        },
        {
            title: 'Item 3',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam ullam perferendis fugit nostrum vitae! Sequi laboriosam ullam vel nostrum non, autem error deleniti! At nulla commodi animi sit numquam delectus quod natus beatae vitae tempora quae itaque repellendus amet consequuntur incidunt, excepturi magnam perferendis? Iste voluptates aliquam exercitationem magni?',
        },
    ];

    // État pour gérer les items ouverts
    const [openItems, setOpenItems] = useState([]); // Tableau des indices des items ouverts

    // Fonction pour ouvrir/fermer un item
    const toggleItem = (index) => {
        setOpenItems((prev) => {
            if (prev.includes(index)) {
                // Si l'item est déjà ouvert, on le ferme
                return prev.filter((i) => i !== index);
            } else {
                // Sinon, on l'ajoute à la liste des ouverts
                return [...prev, index];
            }
        });
    };

    return (
        <>
            <PresentationProject
                title={'Dropdown multiple'}
                subtitle={"Création d'un dropdown multiple avec useState"}
            />

            {contents.map((content, index) => (
                <div
                    key={index}
                    className='flex flex-col gap-4 items-center mt-4 w-full'>
                    <div className='bg-slate-200 rounded-lg w-3/4'>
                        {/* Titre avec clic pour ouvrir/fermer */}
                        <p
                            className='bg-slate-400 rounded-lg text-xl font-bold text-center py-2 hover:cursor-pointer'
                            onClick={() => toggleItem(index)} // Toggle au clic
                        >
                            {content.title}
                        </p>
                        {/* Affichage conditionnel du contenu */}
                        {openItems.includes(index) && (
                            <p className='p-4'>{content.content}</p>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}
`;

    // Données du dropdown
    const contents = [
        {
            title: 'Item 1',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam ullam perferendis fugit nostrum vitae! Sequi laboriosam ullam vel nostrum non, autem error deleniti! At nulla commodi animi sit numquam delectus quod natus beatae vitae tempora quae itaque repellendus amet consequuntur incidunt, excepturi magnam perferendis? Iste voluptates aliquam exercitationem magni?',
        },
        {
            title: 'Item 2',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam ullam perferendis fugit nostrum vitae! Sequi laboriosam ullam vel nostrum non, autem error deleniti! At nulla commodi animi sit numquam delectus quod natus beatae vitae tempora quae itaque repellendus amet consequuntur incidunt, excepturi magnam perferendis? Iste voluptates aliquam exercitationem magni?',
        },
        {
            title: 'Item 3',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam ullam perferendis fugit nostrum vitae! Sequi laboriosam ullam vel nostrum non, autem error deleniti! At nulla commodi animi sit numquam delectus quod natus beatae vitae tempora quae itaque repellendus amet consequuntur incidunt, excepturi magnam perferendis? Iste voluptates aliquam exercitationem magni?',
        },
    ];

    // État pour gérer les items ouverts
    const [openItems, setOpenItems] = useState([]); // Tableau des indices des items ouverts

    // Fonction pour ouvrir/fermer un item
    const toggleItem = (index) => {
        setOpenItems((prev) => {
            if (prev.includes(index)) {
                // Si l'item est déjà ouvert, on le ferme
                return prev.filter((i) => i !== index);
            } else {
                // Sinon, on l'ajoute à la liste des ouverts
                return [...prev, index];
            }
        });
    };

    return (
        <>
            <PresentationProject
                title={'Dropdown multiple'}
                subtitle={"Création d'un dropdown multiple avec useState"}
            />

            {contents.map((content, index) => (
                <div
                    key={index}
                    className='flex flex-col gap-4 items-center mt-4 w-full'>
                    <div className='bg-slate-200 rounded-lg w-3/4'>
                        {/* Titre avec clic pour ouvrir/fermer */}
                        <p
                            className='bg-slate-400 rounded-lg text-xl font-bold text-center py-2 hover:cursor-pointer'
                            onClick={() => toggleItem(index)} // Toggle au clic
                        >
                            {content.title}
                        </p>
                        {/* Affichage conditionnel du contenu */}
                        {openItems.includes(index) && (
                            <p className='p-4'>{content.content}</p>
                        )}
                    </div>
                </div>
            ))}
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
