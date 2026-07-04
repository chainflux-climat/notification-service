import { Controller, Get, Route, Example, Body, Security, Request, Query, Post } from "tsoa"
import { IFcmTokenRequest, INotificationRequest } from './RequestInterface';
import { AddFcmToken, AddNotifications, GetFcmToken } from '../../application/usecases/index';
import { AddFcm, IFcmToken, INotification, AddNotification, Notification, FcmToken } from '../../domain/index';
import { Response } from '../response/Response';
import { Util } from "../utils/Util";
import { Firebase } from "../utils/Firebase";
import { NodeMailer } from "../utils/NodeMailer";
import { mongoConnection, ActivityType } from './index'
import { NotificationRepository } from "../database/NotificationRepository";
import { FcmTokenRepository } from "../database/FcmTokenRepository";

@Route('notification')
export class NotificationController extends Controller {
  private notificationResource: string = "notification";
  public notificationRepository!: NotificationRepository;
  public fcmTokenRepository!: FcmTokenRepository;
  constructor() {
    super();
    this.notificationRepository = new NotificationRepository(mongoConnection);
    this.fcmTokenRepository = new FcmTokenRepository(mongoConnection);
  }

  /**
   * * send Push notifications
   * */
  @Example({
    "success": true,
    "error": [],
    "data": {
    }
  })
  @Post("sendNotification")
  async sendNotification(@Body() notification: INotificationRequest, @Request() request: any) {
    try {
      //let _department: any = await new Util().getDepartmentInfo(request.user);
      //let action: string = ActivityType.CREATE;
      //let isOwnerOrMember: boolean = true;
      // let resource: string = _department._id + ":" + this.notificationResource;
      let hasPermission = true;
      //let hasPermission: boolean = await new Util().hasPermission(request.user, isOwnerOrMember, action, _department.roles, resource);
      if (hasPermission != true) {
        this.setStatus(400);
        return new Response().sendResponseFailure("User Not Authorized", false);
      }

      console.log("notification", notification)
      if (notification.type && notification.type!='forgotPassword') {
        await new NodeMailer().sendMailWithTemplate({ extra_data: notification.extra_data, to: notification.receipt, subject: notification.subject, messageBody: notification.messageBody })
      } else {
        await new NodeMailer().sendMail({ to: notification.receipt, subject: notification.subject, messageBody: notification.messageBody })
      }


      return new Response().sendResponseSuccess({ notification: "sent" }, true);
    } catch (Error: any) {
      console.trace(Error)
      this.setStatus(500);
      return new Response().sendResponseFailure(Error.message, false);
    }
  }

  /**
 * * add fcm token 
 * */
  @Example({
    "success": true,
    "error": [],
    "data": {
    }
  })
  @Security("jwt")
  @Post("addFcmToken")
  async addFcmToken(@Body() fcmToken: IFcmTokenRequest, @Request() request: any) {
    try {
      let _department: any = await new Util().getDepartmentInfo(request.user);
      let action: string = ActivityType.CREATE;
      let isOwnerOrMember: boolean = true;
      let resource: string = _department._id + ":" + this.notificationResource;
      let hasPermission: boolean = await new Util().hasPermission(request.user, isOwnerOrMember, action, _department.roles, resource);
      if (hasPermission != true) {
        this.setStatus(400);
        return new Response().sendResponseFailure("User Not Authorized", false);
      }
      const useCaseFcm = new AddFcmToken(this.fcmTokenRepository);
      let result = new FcmToken().addFcmToken(fcmToken, useCaseFcm);
      return new Response().sendResponseSuccess(result, true);
    } catch (Error: any) {
      this.setStatus(500);
      return new Response().sendResponseFailure(Error.message, false);
    }
  }


}
