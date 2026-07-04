import { IFcmTokenModel } from "./fcmtoken.types";
import { IFcmToken } from "../../../domain/index";
import { Model } from "mongoose";
export async function addFcmToken(
  this: Model<IFcmTokenModel>,
  fcmToken: IFcmToken
): Promise<any> {
  return this.create({ ...fcmToken });
}
export async function getFcmTokenByUserId(
  this: Model<IFcmTokenModel>,
  id: string
): Promise<any> {
  const record = await this.find({ id: id })
  if (record) {
    return record
  } else {
    return []
  }
}