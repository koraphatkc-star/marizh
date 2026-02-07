// auth.js

// Example of simple authentication and role-based access control logic

class Auth {
    constructor() {
        this.users = [];
    }

    register(user) {
        if (this.users.find(u => u.username === user.username)) {
            throw new Error('User already exists!');
        }
        this.users.push(user);
        return user;
    }

    authenticate(username, password) {
        const user = this.users.find(u => u.username === username);
        if (!user || user.password !== password) {
            throw new Error('Authentication failed!');
        }
        return user;
    }

    authorize(user, role) {
        if (user.role !== role) {
            throw new Error('Access denied!');
        }
        return true;
    }
}

// Usage example:
const auth = new Auth();
try {
    auth.register({ username: 'john', password: '1234', role: 'admin' });
    const user = auth.authenticate('john', '1234');
    auth.authorize(user, 'admin'); // succeed
} catch (error) {
    console.error(error.message);
}