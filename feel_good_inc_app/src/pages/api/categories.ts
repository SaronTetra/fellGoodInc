import { getAllCategories } from "../../../lib/redis";

export default async function handler(_req: any, res: any) {
  const categories = await getAllCategories();
  res.status(200).json({ categories });
}
