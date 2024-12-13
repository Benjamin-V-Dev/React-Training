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
                    <p className={`${checked ? 'line-through' : ''}`}>
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
