import {createEvent} from "../../../lib/redis";

export default async function handler(req: any, res: any) {
    const id = await createEvent(req.body);
    res.status(200).json({ id })
}