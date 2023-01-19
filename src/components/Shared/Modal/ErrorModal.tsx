import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.scss";

interface Props {
    title: string;
    message: string;
    onOK: () => void;
}

const Backdrop: React.FC<{ onOK: () => void }> = ({ onOK }) => {
    return <div className={styles.backdrop} onClick={onOK}></div>;
};

const Modal: React.FC<Props> = ({ title, message, onOK }) => {
    return (
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
    );
};

const ErrorModal: React.FC<Props> = ({ title, message, onOK }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onOK={onOK} />,
                document.getElementsByTagName("body")[0]
            )}
            ,
            {ReactDOM.createPortal(
                <Modal title={title} message={message} onOK={onOK} />,
                document.getElementsByTagName("body")[0]
            )}
        </React.Fragment>
    );
};

export default ErrorModal;
