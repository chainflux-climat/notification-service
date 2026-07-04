import { Document, Model } from "mongoose";
import { IFcmToken } from "../../../domain/index";

export interface IFcmTokenDocument extends Document {
}

export interface IFcmTokenModel extends Model<IFcmTokenDocument> {
  addFcmToken: (this: IFcmTokenModel, fcmToken: IFcmToken) => Promise<IFcmToken>;
  getFcmTokenByUserId: (this: IFcmTokenModel, id: string) => Promise<any>;
}