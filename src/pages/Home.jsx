import { Link } from 'react-router-dom';

const projects = [
    {
        name: 'Counter',
        description: 'Compteur avec useState',
        href: '/projet1',
        level: 'Easy',
    },
    {
        name: 'ContactForm',
        description: 'Gérer un input avec useState',
        href: '/projet2',
        level: 'Easy',
    },
    {
        name: 'ContactForm',
        description: 'Gérer un input avec useRef',
        href: '/projet3',
        level: 'Easy',
    },
    {
        name: 'ContactForm',
        description: 'Gérer un input avec formData',
        href: '/projet4',
        level: 'Easy',
    },
    {
        name: 'ContactForm',
        description: 'Gérer un input avec ReactHookForm',
        href: '/projet5',
        level: 'Easy',
    },
    {
        name: 'Switch useState',
        description: 'Gérer un switch avec prevState',
        href: '/projet6',
        level: 'Easy',
    },
    {
        name: 'Checkbox/radio useState',
        description: 'Récupérer la valeur d\'une checkbox ou d\'un radio',
        href: '/projet9',
        level: 'Easy',
    },
    {
        name: 'Requettes CRUD',
        description: 'Créer un CRUD avec RealtimeDatabase (API)',
        href: '/projet7',
        level: 'Medium',
    },
    {
        name: 'Requettes CRUD',
        description: 'Créer un CRUD avec FireStoreDatabase (BAAS)',
        href: '/projet8',
        level: 'Medium',
    },
];

export default function Home() {
    return (
        <div className='flex justify-center items-center gap-10 flex-wrap m-10'>
            {projects.map((project, index) => (
                <Link
                    key={index}
                    to={project.href}
                    className={`border p-6 flex gap-6 justify-start items-center rounded-md w-[48%] ${
                        project.level == 'Easy' ? 'bg-green-400' : ''
                    } ${project.level == 'Medium' ? 'bg-blue-400' : ''} ${
                        project.level == 'Hard' ? 'bg-red-400' : ''
                    }`}>
                    <p className='w-20 border rounded-full text-center py-1'>{project.level}</p>
                    <div>
                        <h2 className='font-bold'>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export async function loader() {
    return (
        <div className='h-screen flex items-center justify-center w-full'>
            Loading ...
        </div>
    );
}
