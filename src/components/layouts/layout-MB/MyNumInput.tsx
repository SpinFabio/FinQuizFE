import { classNames } from '../../../utils/tailwind-utils';

interface MyNumInputProps {
  value: number;
  handleChange: (newNumericValue: number) => void;
  style?: boolean;
  extraStyle?:string
}

const MyNumInput: React.FC<MyNumInputProps> = ({
  value,
  handleChange,
  style,
  extraStyle
}) => {

  let className=""
  if(extraStyle){
    className=extraStyle
  }
  else{
    className=style ? "text-primary-contrast outline-primary-contrast" : "text-primary outline-primary-contrast"
  }

  return (
    <div
      className={classNames(
        "rounded-md px-1 outline-2  focus-within:outline",
        className,
      )}
    >
      <input
        type="number"
        value={value}
        className="w-auto bg-transparent focus:outline-none"
        style={{ width: `${value.toString().length}ch` }}
        onChange={(e) => handleChange(Number(e.target.value) || 0)}
        onFocus={(e) => {
          e.target.select();
          setTimeout(() => {
            e.target.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 300);
        }}
      />
    </div>
  );
};

export default MyNumInput;
