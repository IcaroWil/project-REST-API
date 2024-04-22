import express from 'express';

import { getAllUsers, deleteUser, uptadeUser } from '../controllers/users';
import { isAuthenticated, isOwer } from '../middlewares';


export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/id', isAuthenticated, isOwer, deleteUser);
    router.patch('/users/:id', isAuthenticated, isOwer, uptadeUser);
};

