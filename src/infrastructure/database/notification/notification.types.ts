import { Document, Model } from "mongoose";
import { INotification } from "../../../domain/index";

export interface INotificationDocument extends Document {
}

export interface INotificationModel extends Model<INotificationDocument> {
  addNotification: (this: INotificationModel, notification: INotification) => Promise<INotification>;
}