import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.scss";

interface Props {
    title: string;
    message: string;
    onOK: () => void;
}

const ErrorModal: React.FC<Props> = ({ title, message, onOK }) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={onOK}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={onOK}>Ok</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
