import { Request, Response } from "express";
import { getCountriesNames } from "../services/countries.services";
import catchAsync from "../utils/catchAsync";

export const getAllCountriesNames = catchAsync(
  async (req: Request, res: Response) => {
    const countries = await getCountriesNames();
    res.json(countries);
  }
);
