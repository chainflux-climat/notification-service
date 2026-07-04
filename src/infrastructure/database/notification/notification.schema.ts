import { Schema } from "mongoose";
import { addNotification } from "./notification.statics";

const NotificationSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  sender: {
    type: String,
  },
  receipt: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'delete'],
    default: 'active'
  },
  extra_data: {
    type: Object,
    required: true
  },
  token: {
    type: String
  },
  device: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

NotificationSchema.statics.addNotification = addNotification;

export default NotificationSchema;