const AddUser: React.FC = () => {
    const addUserHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;
