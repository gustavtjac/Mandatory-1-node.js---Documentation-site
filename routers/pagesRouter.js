import { Router } from 'express';
const router = Router();

import { frontpagePage, aboutPage, notePages } from '../util/pagesUtil.js';

//___________________________SITES_________________________________________
router.get('/', (req, res) => {
    res.send(frontpagePage)
});

router.get('/notes/:note', (req, res) => {
    const noteIdentifier = parseInt(req.params.note);

    const page = notePages.get(noteIdentifier)

    if (!page) {
        if (!page) return res.status(404).send({
            data: {
                error: "Could not find note"
            }
        });
    }
    res.send(page)
})

router.get('/about', (req, res) => {
    res.send(aboutPage)
});

export default router;