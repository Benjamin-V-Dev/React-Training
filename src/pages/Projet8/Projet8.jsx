import PresentationProject from '../../components/PresentationProject';
import { db } from '../../firebase.js';
import {
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
} from 'firebase/firestore';
import { useRef, useEffect, useState } from 'react';
import Item from './Item';

export default function Projet8() {
    // Variables
    const [showCode, setShowCode] = useState(false); // State pour afficher ou masquer le code
    const componentCode = `import PresentationProject from '../../components/PresentationProject';
import { db } from '../../firebase.js';
import {
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
} from 'firebase/firestore';
import { useRef, useEffect, useState } from 'react';
import Item from './Item';

export default function Projet8() {
    // States
    const [items, setItems] = useState([]);

    // Refs
    const inputRef = useRef();

    // Effects
    useEffect(() => {
        inputRef.current.focus();
        getData();
    }, []);

    // Récupérer un item dans la DB (GET)
    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'items'));
            const formattedData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems(formattedData);
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données :',
                error,
            );
            alert('Une erreur est survenue lors du chargement des données.');
        }
    };

    // Ajouter un item dans la DB (POST)
    const postData = async (e) => {
        e.preventDefault();
        const value = inputRef.current.value.trim();
        if (!value) {
            alert('Le champ ne peut pas être vide.');
            return;
        }

        try {
            await addDoc(collection(db, 'items'), { value });
            inputRef.current.value = ''; // Réinitialise l'input
            getData(); // Recharge les données après ajout
        } catch (error) {
            console.error('Erreur lors de l’ajout des données :', error);
            alert('Une erreur est survenue lors de l’ajout de l’item.');
        }
    };

    // Supprimer un item dans la DB (DELETE)
    const deleteData = async (id) => {
        const isConfirmed = window.confirm(
            'Êtes-vous sûr de vouloir supprimer cet élément ?',
        );
        if (!isConfirmed) return;

        try {
            await deleteDoc(doc(db, 'items', id));
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression des données :', error);
            alert('Une erreur est survenue lors de la suppression.');
        }
    };

    // Modifier un item dans la DB (UPDATE)
    const updateData = async (id, newValue) => {
        if (!newValue.trim()) {
            alert('La valeur ne peut pas être vide.');
            return;
        }

        try {
            const itemRef = doc(db, 'items', id);
            await updateDoc(itemRef, { value: newValue });
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, value: newValue } : item,
                ),
            );
        } catch (error) {
            console.error('Erreur lors de la mise à jour des données :', error);
            alert('Une erreur est survenue lors de la mise à jour.');
        }
    };

    return (
        <>
            <PresentationProject
                title={'Créer un CRUD avec une API'}
                subtitle={'Utilisation de Firebase Firestore Database'}
            />
            <form onSubmit={postData}>
                <label htmlFor='item-input'>Item</label>
                <input
                    type='text'
                    name='item'
                    id='item-input'
                    required
                    /* On ajoute ici la référence */
                    ref={inputRef}
                />
                <button>Submit</button>
            </form>
            <div className='flex flex-col justify-start items-center'>
                <h2 className='text-4xl'>To-Do</h2>
                {items.length > 0 ? (
                    <ul className='flex flex-col gap-4'>
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className='bg-blue-50 w-[500px] flex items-center justify-start flex-wrap rounded p-4'>
                                <Item
                                    item={item}
                                    id={item.id}
                                    onDelete={deleteData}
                                    onUpdate={updateData}>
                                </Item>
                                // Le composant "Item" est en dessous
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Chargement ou aucun item disponible</p>
                )}
            </div>
        </>
    );
}

/* -------------------------------------- */
/* ------> Composant enfant "Item" <------*/
/* -------------------------------------- */

import { useState } from 'react';

export default function Item({ item, id, onDelete, onUpdate }) {
    // States
    const [checked, setChecked] = useState(false); // État pour la checkbox
    const [isEditing, setIsEditing] = useState(false); // État pour le mode édition
    const [newValue, setNewValue] = useState(item.value); // État pour la valeur modifiée

    // Fonction pour gérer le changement d'état de la checkbox
    const handleCheckboxChange = (e) => {
        setChecked(e.target.checked);
    };

    // Fonction pour soumettre la mise à jour
    const handleUpdate = () => {
        if (newValue.trim() === '') {
            alert('La valeur ne peut pas être vide.');
            return;
        }
        onUpdate(id, newValue); // Appeler la fonction d'update depuis le parent
        setIsEditing(false); // Sortir du mode édition
    };

    return (
        <>
            <div className='flex gap-4 w-4/5'>
                <input
                    type='checkbox'
                    className='p-0 m-0'
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                {isEditing ? (
                    <>
                        <input
                            type='text'
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)} // Mettre à jour l'état local
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleUpdate(); // Sauvegarder lors de l'appui sur Entrée
                            }}
                            className='border border-gray-300 p-1 rounded m-0 w-full'
                        />
                        <button
                            onClick={handleUpdate} // Appeler handleUpdate au clic sur le bouton
                            className='bg-white rounded'>
                            ✓
                        </button>
                    </>
                ) : (
                    <p className={\`\${checked ? 'line-through' : ''}\`}>
                        {item.value}
                    </p>
                )}
            </div>
            <div className='flex gap-4 justify-end w-1/5'>
                <p
                    className='hover:cursor-pointer'
                    onClick={() => onDelete(id)}>
                    🗑️
                </p>
                <p
                    className='hover:cursor-pointer'
                    onClick={() => setIsEditing(true)}>
                    {' '}
                    {/* Activer le mode édition */}
                    ✏️
                </p>
            </div>
        </>
    );
}

`;

    // States
    const [items, setItems] = useState([]);

    // Refs
    const inputRef = useRef();

    // Effects
    useEffect(() => {
        inputRef.current.focus();
        getData();
    }, []);

    // Récupérer un item dans la DB (GET)
    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'items'));
            const formattedData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems(formattedData);
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des données :',
                error,
            );
            alert('Une erreur est survenue lors du chargement des données.');
        }
    };

    // Ajouter un item dans la DB (POST)
    const postData = async (e) => {
        e.preventDefault();
        const value = inputRef.current.value.trim();
        if (!value) {
            alert('Le champ ne peut pas être vide.');
            return;
        }

        try {
            await addDoc(collection(db, 'items'), { value });
            inputRef.current.value = ''; // Réinitialise l'input
            getData(); // Recharge les données après ajout
        } catch (error) {
            console.error('Erreur lors de l’ajout des données :', error);
            alert('Une erreur est survenue lors de l’ajout de l’item.');
        }
    };

    // Supprimer un item dans la DB (DELETE)
    const deleteData = async (id) => {
        const isConfirmed = window.confirm(
            'Êtes-vous sûr de vouloir supprimer cet élément ?',
        );
        if (!isConfirmed) return;

        try {
            await deleteDoc(doc(db, 'items', id));
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression des données :', error);
            alert('Une erreur est survenue lors de la suppression.');
        }
    };

    // Modifier un item dans la DB (UPDATE)
    const updateData = async (id, newValue) => {
        if (!newValue.trim()) {
            alert('La valeur ne peut pas être vide.');
            return;
        }

        try {
            const itemRef = doc(db, 'items', id);
            await updateDoc(itemRef, { value: newValue });
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, value: newValue } : item,
                ),
            );
        } catch (error) {
            console.error('Erreur lors de la mise à jour des données :', error);
            alert('Une erreur est survenue lors de la mise à jour.');
        }
    };

    return (
        <>
            <PresentationProject
                title={'Créer un CRUD avec une database'}
                subtitle={'Utilisation de Firebase Firestore Database'}
            />
            <form onSubmit={postData}>
                <label htmlFor='item-input'>Item</label>
                <input
                    type='text'
                    name='item'
                    id='item-input'
                    required
                    /* On ajoute ici la référence */
                    ref={inputRef}
                />
                <button>Submit</button>
            </form>
            <div className='flex flex-col justify-start items-center'>
                <h2 className='text-4xl'>To-Do</h2>
                {items.length > 0 ? (
                    <ul className='flex flex-col gap-4'>
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className='bg-blue-50 w-[500px] flex items-center justify-start flex-wrap rounded p-4'>
                                <Item
                                    item={item}
                                    id={item.id}
                                    onDelete={deleteData}
                                    onUpdate={updateData}></Item>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Chargement ou aucun item disponible</p>
                )}
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
