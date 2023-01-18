class User {
    id: string;
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.id = new Date().toISOString();
    }
}

export default User;
