import { INotificationModel } from "./notification.types";
import { INotification } from "../../../domain/index";
import { Model } from "mongoose";

export async function addNotification(
  this: Model<INotificationModel>,
  notification: INotification
): Promise<any> {
  return this.create({ ...notification });
}