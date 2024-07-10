import { Request, Response } from "express";
import { getIssUtmLocation } from "../services/utm.services";
import catchAsync from "../utils/catchAsync";

export const getUtmLocation = catchAsync(
  async (req: Request, res: Response) => {
    const utmLocation = await getIssUtmLocation();
    res.json(utmLocation);
  }
);
