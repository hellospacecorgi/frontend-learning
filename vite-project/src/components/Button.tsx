import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "danger" | "success" | "secondary";
  onButtonClick: () => void;
}

const Button = ({ children, color = "primary", onButtonClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
