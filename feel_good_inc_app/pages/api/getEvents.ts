import { getAllEvents } from '../../lib/redis';

export default async function handler(req: any, res: any) {
    const events = await getAllEvents();
    res.status(200).json({events});
}