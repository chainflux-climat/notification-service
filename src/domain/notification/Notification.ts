import { INotification } from './INotification';
import { AddNotification } from './AddNotification';


export class Notification {
  constructor() { };

  addNotification(notification: INotification, useCase: any) {
    let _notification = new AddNotification(notification);
    return useCase.addNotification(_notification);
  }
}