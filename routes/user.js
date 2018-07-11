const express = require('express');
const router = express.Router();

function create({ userService }) {
    router.get(
        '/',
        (async (req, res) => {
            const users = await userService.getAllUser();
            res.json(users);
        }),
    );

    return router;
}

module.exports.create = create;