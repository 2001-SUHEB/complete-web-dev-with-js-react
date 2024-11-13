interface User {
    id: number;
    username: string;
    isLoggedIn: boolean;
}

function loginUser(obj: User): User {
    obj.isLoggedIn = true;
    return obj;
}

const object1: User = {
    id: 123,
    username: "suheb",
    isLoggedIn: false
};

const updatedUser = loginUser(object1);
console.log(updatedUser);
