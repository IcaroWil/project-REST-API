import express from 'express';

import { deleteUserById, getUsers } from '../db/users';
import { getUserById } from 'db/users.js';


export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();

        return res.status(200).json(users);
    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const deletedUser = await deleteUserById(id);

        return res.json(deleteUser);
    } catch (error) {
        console.log(error) {
            return resizeBy.sendStatus(400);
        }
    }
} 

export const uptadeUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const { username } = req.body;

        if (!username) {
            return res.sendStatus(400);
        }

        const user = await getUserById(id);

        user.username = username;
        await user.save();

        return res.status(200).json(user).end();
    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
}