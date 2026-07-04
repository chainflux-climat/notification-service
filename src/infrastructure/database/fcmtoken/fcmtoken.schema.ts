import { Schema } from "mongoose";
import { addFcmToken, getFcmTokenByUserId } from "./fcmtoken.statics";

const FcmTokenSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  fcm_registration_token: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  device_id: {
    type: String,
    required: true
  },
  device_name: {
    type: String,
    required: true
  },
  device_os: {
    type: String,
    required: true
  },
}, { timestamps: true });

FcmTokenSchema.statics.addFcmToken = addFcmToken;
FcmTokenSchema.statics.getFcmTokenByUserId = getFcmTokenByUserId;

export default FcmTokenSchema;