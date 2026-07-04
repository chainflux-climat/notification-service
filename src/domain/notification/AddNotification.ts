import { INotification } from './INotification';
import { v4 as uuidv4 } from 'uuid';
export class AddNotification implements INotification {
  type: string;
  sender: string;
  extra_data: any;
  token?: string;
  device: string;
  id: string

  constructor(notification: INotification) {
    if (!notification.type) throw new Error('type missing');
    if (!notification.sender) throw new Error('sender missing');
    if (!notification.extra_data) throw new Error('extra_data missing');
    if (!notification.device) throw new Error('device missing');

    this.id = uuidv4();
    this.type = notification.type;
    this.sender = notification.sender;
    this.extra_data = notification.extra_data;
    if (notification.token) notification.token
    this.device = notification.device;

  }


}