import express from "express";

import { createUser, getUser, getUsers, deleteUser, updateUserInfo } from "../API_Request_Functions/users_api_request.js";

const router = express.Router();




router.post('/', createUser);

router.get('/', getUsers)

router.get('/:id', getUser);



router.delete('/:id', deleteUser);


router.patch('/:id', updateUserInfo);



export default router;