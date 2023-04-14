type Input = {
  disabled?: boolean;
  className: string;
  type?: string;
  required?: boolean;
  autofocus?: boolean;
  value?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ disabled = false, className, onChange, ...props }: Input) => (
  <input
    disabled={disabled}
    className={`${className} outline-none focus:border-none text-gray-600 px-3 rounded-md  border-gray-300   focus:ring-opacity-50`}
    onChange={onChange}
    {...props}
  />
);

export default Input;
