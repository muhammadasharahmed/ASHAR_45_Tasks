const current_users: string[] = ["Ali", "Akram", "Yaseen", "Asghar", "Huzaifa"];
const new_users: string[] = ["ali", "abdullah", "anas", "daniyal", "huzaifa"];

function checkUserNames(current_users: string[], new_users: string[]): void {
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
    for (let newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`Username "${newUser}" is already taken. Please enter a new username.`);
        } else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}

checkUserNames(current_users, new_users);