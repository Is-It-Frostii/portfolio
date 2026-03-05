const Button = ({ children, buttonUrl }) => {
    return (
        <>
            <a
                href={buttonUrl ? buttonUrl : "#"}
                className="p-3 px-6
                    bg-blue-500 w-fit
                    rounded-lg block
                    hover:bg-blue-700
                    duration-300">
                {children}
            </a>
        </>
    );
};

export default Button;
