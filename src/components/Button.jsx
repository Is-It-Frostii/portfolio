const Button = ({ children }) => {
    return (
        <>
            <a
                href="#"
                className="mt-6 p-3 px-6 bg-green-500 w-fit rounded-lg block hover:bg-green-700 duration-300">
                {children}
            </a>
        </>
    );
};

export default Button;
