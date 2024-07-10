import { Request, Response } from "express";
import { getCountries } from "../services/countries.services";
import catchAsync from "../utils/catchAsync";

export const getAllCountries = catchAsync(
  async (req: Request, res: Response) => {
    const countries = await getCountries();
    res.json(countries);
  }
);
