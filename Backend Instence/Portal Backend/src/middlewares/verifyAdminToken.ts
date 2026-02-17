import type { NextFunction } from "express";
import AppError from "../error/AppError";
import httpStatus from 'http-status';
import admin from "../Config/firebase.admin";
export const allowedRoles = ["mother", "super", "admin", "master", 'cs admin', "official admin"];

export const verifyAdminToken = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return next(
      new AppError(httpStatus.UNAUTHORIZED, "Unauthorized: No token provided")
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken: DecodedIdToken =
      await admin.auth().verifyIdToken(token as string);
    const adminUser = await AdminUser.findOne({ uid: decodedToken.uid }).limit(1);
    console.log(adminUser)
    if (!adminUser) {
      return next(
        new AppError(httpStatus.UNAUTHORIZED, "Access denied - Admin only")
      );
    }

    req.user = {
      _id: decodedToken.id,
      uid: decodedToken.uid,
      email: decodedToken.email,
      role: adminUser.role,
      idNumber: adminUser.idNumber,
      mongoId: adminUser._id.toString(),
    };

    next();
  } catch {
    next(
      new AppError(httpStatus.UNAUTHORIZED, "Invalid or expired token")
    );
  }
};
