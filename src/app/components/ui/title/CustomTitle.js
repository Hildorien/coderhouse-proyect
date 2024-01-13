export default function CustomTitle({ title, children }) {
    return (
        <main className="flex-grow p-4">
            <h1 className="text-4xl text-blue-600 my-4">{title}</h1>
            <hr />
            {children}
        </main>
    );
}