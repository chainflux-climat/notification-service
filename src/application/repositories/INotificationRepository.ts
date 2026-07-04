import { AddNotification } from '../../domain/index';

export abstract class INotificationRepository {
  abstract addNotification(notification: AddNotification): Promise<any>;
}