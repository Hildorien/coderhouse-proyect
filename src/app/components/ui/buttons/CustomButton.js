export default function CustomButton({ children, className = "", ...args }) {
    return (
        <button
            className={`rounded-xl py-2 px-3 bg-blue-400 text-center 
      text-white ${className}`}
            {...args}
        >
            {children}
        </button>
    );
}
