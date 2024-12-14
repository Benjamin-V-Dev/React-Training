import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Main from './layouts/Main';
import { lazy, Suspense } from 'react';

/* Lazy et Suspense permettent de créer un Lazy loading sur nos pages */
const Home = lazy(() => import('./pages/Home'));
const Projet1 = lazy(() => import('./pages/Projet1/Projet1'));
const Projet2 = lazy(() => import('./pages/Projet2/Projet2'));
const Projet3 = lazy(() => import('./pages/Projet3/Projet3'));
const Projet4 = lazy(() => import('./pages/Projet4/Projet4'));
const Projet5 = lazy(() => import('./pages/Projet5/Projet5'));
const Projet6 = lazy(() => import('./pages/Projet6/Projet6'));
const Projet7 = lazy(() => import('./pages/Projet7/Projet7'));
const Projet8 = lazy(() => import('./pages/Projet8/Projet8'));
const Projet9 = lazy(() => import('./pages/Projet9/Projet9'));
const Projet10 = lazy(() => import('./pages/Projet10/Projet10'));
const Projet11 = lazy(() => import('./pages/Projet11/Projet11'));
const Projet12 = lazy(() => import('./pages/Projet12/Projet12'));
const Projet13 = lazy(() => import('./pages/Projet13/Projet13'));
const Projet14 = lazy(() => import('./pages/Projet14/Projet14'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Home />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Home" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Home').then((module) => module.loader()),
            },
            /* Projet Todolist */
            {
                path: '/projet1',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet1 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet1/Projet1').then((module) =>
                        module.loader(),
                    ),
            },
            /* Projet Gérer un input avec useState */
            {
                path: '/projet2',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet2 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet2/Projet2').then((module) =>
                        module.loader(),
                    ),
            },
            /* Projet Gérer un input avec useRef */
            {
                path: '/projet3',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet3 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet3/Projet3').then((module) =>
                        module.loader(),
                    ),
            },
            /* Projet Gérer un input avec formData */
            {
                path: '/projet4',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet4 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet4/Projet4').then((module) =>
                        module.loader(),
                    ),
            },
            /* Projet Gérer un input avec ReactHookForm */
            {
                path: '/projet5',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet5 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet5/Projet5').then((module) =>
                        module.loader(),
                    ),
            },
            /* Projet Gérer un switch avec useState et prevState */
            {
                path: '/projet6',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet6 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet6/Projet6').then((module) =>
                        module.loader(),
                    ),
            },
            /* Projet Créer un CRUD avec RealtimeDatabase (API) */
            {
                path: '/projet7',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet7 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet7/Projet7').then((module) =>
                        module.loader(),
                    ),
            },
            /* Projet Créer un CRUD avec FirestoreDatabase (API) */
            {
                path: '/projet8',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet8 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet8/Projet8').then((module) =>
                        module.loader(),
                    ),
            },
            /* Récupérer la valeur d'une checkbox */
            {
                path: '/projet9',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet9 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet9/Projet9').then((module) =>
                        module.loader(),
                    ),
            },
            /* les méthodes les plus utiles */
            {
                path: '/projet10',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet10 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet10/Projet10').then((module) =>
                        module.loader(),
                    ),
            },
            /* Calculatrice IMC */
            {
                path: '/projet11',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet11 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet11/Projet11').then((module) =>
                        module.loader(),
                    ),
            },
            /* Slider */
            {
                path: '/projet12',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet12 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet12/Projet12').then((module) =>
                        module.loader(),
                    ),
            },
            /* Dropdown multiple */
            {
                path: '/projet13',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet13 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet13/Projet13').then((module) =>
                        module.loader(),
                    ),
            },
            /* Dropdown unique */
            {
                path: '/projet14',
                element: (
                    /* On ajoute suspense pour que lazy fonctionne correctement */
                    <Suspense>
                        <Projet14 />
                    </Suspense>
                ),
                /* On utilise le loader et on ajoute "export async function loader" dans "Projet1" pour que ca fonctionne */
                loader: () =>
                    import('./pages/Projet14/Projet14').then((module) =>
                        module.loader(),
                    ),
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
