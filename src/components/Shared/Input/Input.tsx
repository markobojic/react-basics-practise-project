import styles from "./Input.module.scss";

interface Props {
    label: string;
    type: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = ({ label, type, value, onChange }) => {
    return (
        <div className={styles["form-control"]}>
            <label htmlFor={label}>{label}</label>
            <input type={type} value={value} id={label} onChange={onChange} />
        </div>
    );
};

export default Input;
