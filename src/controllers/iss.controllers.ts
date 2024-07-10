import { Request, Response } from "express";
import { getIssCountry } from "../services/iss.services";
import catchAsync from "../utils/catchAsync";

export const getIssLocation = catchAsync(
  async (req: Request, res: Response) => {
    const country = await getIssCountry();
    res.json({ country });
  }
);
