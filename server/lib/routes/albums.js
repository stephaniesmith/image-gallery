const router = require('express').Router(); /* eslint-disable-line */
const { respond } = require('./route-helpers');
const Album = require('../models/Album');

module.exports = router

    .post('/', respond(
        ({ body }) => {
            return Album.create(body);
        }
    ))

    .get('/', respond(
        () => {
            return Album.find()
                .lean();
        }
    ));