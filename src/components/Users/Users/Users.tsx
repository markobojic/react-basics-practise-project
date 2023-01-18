import Card from "../../Shared/Card/Card";
import User from "../models/user";

import styles from "./Users.module.scss";

const Users: React.FC<{ users: User[] }> = ({ users }) => {
    const renderUserList = users.map((user) => {
        return (
            <li key={user.id}>
                <h3>{user.name}</h3>
                <p>({user.age} years old)</p>
            </li>
        );
    });
    return (
        <Card className={styles.users}>
            <ul>{renderUserList}</ul>
        </Card>
    );
};

export default Users;
