import { Response } from "express";

export async function handleException(_res: Response, e: any) {
  if (e.requestErrors) {
    _res.json({ message: e.message || e, details: e.requestErrors });

    return;
  }

  _res.json({ error: e.message || e });
}
