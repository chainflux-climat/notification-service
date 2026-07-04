import { AddNotification } from "../../../domain/index";
import { INotificationRepository } from "../../repositories/INotificationRepository";

export default class AddNotifications {
  private notificationRepository: INotificationRepository;

  constructor(notificationRepository: INotificationRepository) {
    this.notificationRepository = notificationRepository;
  }

  addNotification(notification: AddNotification) {
    return this.notificationRepository.addNotification(notification);
  }

}