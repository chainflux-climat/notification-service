import { AddNotification } from '../../domain/index'
import { INotificationRepository } from '../../application/repositories/INotificationRepository'
import { IDBConnection } from './IDBConnection'

export class NotificationRepository extends INotificationRepository {

  private connection: IDBConnection;

  constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  async addNotification(notification: AddNotification): Promise<any> {
    let result = await this.connection.addNotification(notification);
    return result
  }
}