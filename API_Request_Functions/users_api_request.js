import { v4 as uuidv4 } from "uuid";

let users = []

export const createUser = (req, res) => {
    //take the inputs and convert it to json body
    const user = req.body;

    const userWithId = { ...user, id: uuidv4() }
    // send the data to the server
    users.push(userWithId)

    res.send(` Account has  created for ${user.name}, Enjoy our services`)
}
export const getUsers = (req, res) => {
    res.send(users)
}

export const getUser = (req, res) => {
    // the user id ti fetch user data
    const { id } = req.params;
    // a checker, to verify if the data the user is requesting is has the same id as he user id
    const foundUser = users.find((user) => user.id == id)

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    // Takes the user id  and sent request
    const { id } = req.params;

    //if the sent ID is equal any of the available data , the it deletes the user data 
    users = users.filter((user) => user.id != id)

    //message to show user data has been removed
    res.send(`User with ${id} has been deleted`)
}

export const updateUserInfo = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id == id)

    const { name, age, gender } = req.body;
    if (name) user.name = name;
    if (age) user.age = age;
    if (gender) user.gender = gender;

    res.send(`User with this ${id} has been updated `)
}
