// Function to generate random user information
function generateRandomUser() {
    const user = {
        name: generateRandomName(),
        age: generateRandomAge(),
        email: generateRandomEmail()
        // Add more fields as needed
    };
    return user;
}

// Function to generate a random name
function generateRandomName() {
    const names = ["Ahmed", "Sarah", "Huda", "Salem", "Muna"];
    return names[Math.floor(Math.random() * names.length)];
}

// Function to generate a random age
function generateRandomAge() {
    return Math.floor(Math.random() * 50) + 18; // Random age between 18 and 67
}

// Function to generate a random email
function generateRandomEmail() {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `user${Math.floor(Math.random() * 1000)}@${randomDomain}`;
}

// Array to store user information
let users = [];

// Function to add user information
function addUser() {
    const user = generateRandomUser();
    users.push(user);
    console.log('User added:', user);
}

// Function to update user information
function updateUser(index) {
    if (index >= 0 && index < users.length) {
        const updatedUser = generateRandomUser();
        users[index] = updatedUser;
        console.log('User updated:', updatedUser);
    } else {
        console.log('Invalid user index.');
    }
}

// Initial prompt
console.log('Welcome to Snapchat Ad Platform User Management System!');
console.log('Enter "add" to add a new user or "update [index]" to update an existing user.');

// Mocking user interaction for demonstration
addUser();
addUser();
updateUser(0);
