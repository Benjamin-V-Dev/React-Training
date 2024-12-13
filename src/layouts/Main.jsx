import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';

export default function Main() {
    // Variable
    const navigation = useNavigation();

    return (
        <>
            {/* Header */}
            <Header />

            {/* Loading */}
            {navigation.state === 'loading' ? (
                <div className='flex justify-center mt-1'>Chargement...</div>
            ) : (
                // Outlet
                <Outlet />
            )}

            {/* Footer */}
        </>
    );
}
