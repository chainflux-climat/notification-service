
import mongoose from 'mongoose';
import logger from './logger/logger'

import { IDBConnection } from '../interfaces/database/IDBConnection'

import { FcmTokenModel } from './database/fcmtoken/fcmtoken.model';
import { NotificationModel } from './database/notification/notification.model';


export class MongoConnection extends IDBConnection {

  constructor() {
    super();

    let mongo_url: string;

    if (process.env.MONGODB_URI) {
      mongo_url = process.env.MONGODB_URI + "/" + process.env.DB_NAME + "?authSource=admin";// replicaSet=staging-rs0
    } else if (process.env.ENVIRONMENT?.toString().includes("dev")) {
      // mongo_url = process.env.MONGODB_HOST + ":" + process.env.MONGODB_PORT + "/" + process.env.DB_NAME;
      mongo_url = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" +
        process.env.MONGODB_HOST + ":" + process.env.MONGODB_PORT + "/" + process.env.DB_NAME + "?authSource=admin";
    } else {
      mongo_url = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" +
        process.env.MONGODB_HOST + ":" + process.env.MONGODB_PORT + "/" + process.env.DB_NAME + "?authSource=admin";
    }

    mongoose.connect(mongo_url)
      .then(
        () => {
          console.log("MongoDB connection successful at " + new Date());
          logger.debug("MongoDB connection successful at " + new Date());
        },
      ).catch((err: string) => {
        console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
      });
    return;
  }

  async addNotification(query: any) {
    return await NotificationModel.addNotification(query);
  }
  async addFcmToken(query: any) {
    return await FcmTokenModel.addFcmToken(query);
  }
  async getFcmTokenByUserId(query: any) {
    return await FcmTokenModel.getFcmTokenByUserId(query);
  }




}
