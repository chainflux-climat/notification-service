import { model } from "mongoose";
import { IFcmTokenModel, IFcmTokenDocument } from "./fcmtoken.types";
import FcmTokenSchema from "./fcmtoken.schema";

export const FcmTokenModel = model<IFcmTokenDocument>("fcmToken", FcmTokenSchema) as IFcmTokenModel;