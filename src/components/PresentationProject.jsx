export default function PresentationProject({ title, subtitle }) {
    return (
        <div className='text-center mt-10'>
            <h1 className='text-5xl font-bold my-4'>Projet : {title}</h1>
            <div className="bg-blue-100 w-fit mx-auto p-4 border-l-[6px] border-blue-500 rounded">
                <p className='text-blue-600'>{subtitle}</p>
            </div>
        </div>
    );
}
