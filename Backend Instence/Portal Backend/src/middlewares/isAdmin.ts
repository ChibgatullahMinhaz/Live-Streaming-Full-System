import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import AppError from "../error/AppError.js";
import { allowedRoles } from "../constants/roles";

export const isAdmin = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (!req.user?.role) {
    return next(new AppError(httpStatus.UNAUTHORIZED, "Unauthorized"));
  }

  if (!allowedRoles.includes(req.user.role)) {
    return next(
      new AppError(httpStatus.FORBIDDEN, "Access denied - Admins only")
    );
  }

  next();
};
