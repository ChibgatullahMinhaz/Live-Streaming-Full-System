import { Request, Response, NextFunction } from "express";
import { DecodedIdToken } from "firebase-admin/auth";
import httpStatus from "http-status";
import AppError from "../error/AppError";
import admin from "../config/firebase.admin";
import { User } from "../modules/Users/users.model";

export const verifyUserToken = async (
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

        const user = await User.findOne({ uid: decodedToken.uid }).limit(1);
        
        if (!user) {
            return next(
                new AppError(httpStatus.UNAUTHORIZED, "Access denied - user only")
            );
        }
        req.user = {
            _id: user.id,
            uid: decodedToken.uid,
            email: decodedToken.email,
        };

        next();
    } catch {
        next(
            new AppError(httpStatus.UNAUTHORIZED, "Invalid or expired token")
        );
    }
};
