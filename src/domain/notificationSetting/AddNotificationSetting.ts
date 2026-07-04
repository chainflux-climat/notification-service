import { IAllowAction, INotificationSetting } from './INotificationSetting';
import { v4 as uuidv4 } from 'uuid';
export default class AddNotificationSetting implements INotificationSetting {
  id?: string;
  user_id: string;
  departmentId: string;
  departmentName: string;
  allowAction: IAllowAction[];
  constructor(notification: INotificationSetting) {
    if (!notification.user_id) throw new Error('user_id missing');
    if (!notification.departmentId) throw new Error('departmentId missing');
    if (!notification.departmentName) throw new Error('departmentName missing');
    if (!notification.allowAction) throw new Error('allowAction missing');
    for (let i = 0; i < notification.allowAction.length; i++) {
      if (notification.allowAction[i].type == undefined) throw new Error('type missing or incorrect');
      if (notification.allowAction[i].active == undefined) throw new Error('active missing');
    }
    this.id = uuidv4();
    this.user_id = notification.user_id;
    this.departmentId = notification.departmentId;
    this.allowAction = notification.allowAction;
    this.departmentName = notification.departmentName;

  }
}