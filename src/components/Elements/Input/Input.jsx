import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const { type, placeholder, name } = props;

    return (
        <input
            type={type}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder={placeholder}
            name={name}
            id={name}
            ref={ref}
        />
    );
});

export default Input;