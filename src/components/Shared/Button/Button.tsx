import styles from "./Button.module.scss";

interface Props {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ children, type, onClick }) => {
    return (
        <button
            type={type || "button"}
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
