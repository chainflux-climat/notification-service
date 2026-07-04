import { INotificationSetting, IUpdateNotificationSetting } from './INotificationSetting';
import AddNotificationSetting from './AddNotificationSetting';
import UpdateNotificationSetting from './UpdateNotificationSetting';


export class NotificationSetting {
  constructor() { };

  addNotificationSetting(notification: INotificationSetting, useCase: any) {
    let _notificationSetting = new AddNotificationSetting(notification);
    return useCase.addNotificationSetting(_notificationSetting);
  }

  updateNotificationSetting(notification: IUpdateNotificationSetting, useCase: any) {
    let _notificationSetting = new UpdateNotificationSetting(notification);
    return useCase.updateNotificationSetting(_notificationSetting);
  }

}