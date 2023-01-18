import { useState } from "react";

import Button from "../../Shared/Button/Button";
import Card from "../../Shared/Card/Card";
import Input from "../../Shared/Input/Input";
import User from "../models/user";
import ErrorModal from "../../../components/Shared/Modal/ErrorModal";
import styles from "./AddUser.module.scss";
import { ErrorMessage } from "../../Shared/Modal/error";

const AddUser: React.FC<{ addUser(user: User): void }> = ({ addUser }) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState<ErrorMessage | null>(null);

    const addUserHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }

        if (+age < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0).",
            });
            return;
        }

        const payload = new User(username, +age);
        addUser(payload);

        setUsername("");
        setAge("");
    };

    const changeUserNameHandler = (
        event: React.FormEvent<HTMLInputElement>
    ) => {
        setUsername(event.currentTarget.value);
    };

    const changeUserAgeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setAge(event.currentTarget.value);
    };

    const errorModalHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onOK={errorModalHandler}
                />
            )}
            <Card className={styles["form-wrapper"]}>
                <form onSubmit={addUserHandler}>
                    <Input
                        label="Username"
                        type="text"
                        value={username}
                        onChange={changeUserNameHandler}
                    />
                    <Input
                        label="Age (Years)"
                        type="number"
                        value={age}
                        onChange={changeUserAgeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
