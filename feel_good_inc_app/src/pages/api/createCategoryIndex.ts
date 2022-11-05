import { createCategoryIndex } from "../../../lib/redis";

export default async function handler(_req: any, res: any) {
  await createCategoryIndex();
  res.status(200).send("ok");
}
