import { createEventIndex } from '../../lib/redis';

export default async function handler(req, res) {
    await createEventIndex();
    res.status(200).send('ok');
}