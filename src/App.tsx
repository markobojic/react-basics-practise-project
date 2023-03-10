import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import User from "./components/Users/models/user";
import Users from "./components/Users/Users/Users";

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const addUserHandler = (user: User) => {
        setUsers((state) => {
            return [...state, user];
        });
    };

    return (
        <React.Fragment>
            <AddUser addUser={addUserHandler} />
            <Users users={users} />
        </React.Fragment>
    );
};

export default App;
