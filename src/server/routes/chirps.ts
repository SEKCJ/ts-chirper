import * as express from 'express';
import { chirpsStore } from '../chirpstore'

let chirpsRoute = express.Router();

chirpsRoute.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.json(chirpsStore.GetChirps());
    }
})

chirpsRoute.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.status(200).json("posted");
})

chirpsRoute.put('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpsStore.UpdateChirp(id, req.body));
    } else {
        res.send(chirpsStore.UpdateChirp());
    }
})

chirpsRoute.delete('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.sendStatus(200).json(chirpsStore.DeleteChirp(id))
    } else {
        res.json(chirpsStore.DeleteChirp());
    }
})

export default chirpsRoute