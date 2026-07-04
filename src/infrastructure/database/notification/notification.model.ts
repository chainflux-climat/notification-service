import { model } from "mongoose";
import { INotificationModel, INotificationDocument } from "./notification.types";
import NotificationSchema from "./notification.schema";

export const NotificationModel = model<INotificationDocument>("notification", NotificationSchema) as INotificationModel;