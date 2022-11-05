import { createEventIndex } from '../../lib/redis';

export default async function handler(req: any, res: any) {
    await createEventIndex();
    res.status(200).send('ok');
}