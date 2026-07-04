import { IAllowAction, IUpdateNotificationSetting } from './INotificationSetting';
export default class UpdateNotificationSetting implements IUpdateNotificationSetting {
  id: string;
  user_id: string;
  departmentId: string;
  allowAction: IAllowAction[];
  departmentName: string;
  constructor(notification: IUpdateNotificationSetting) {
    if (!notification.id) throw new Error('id missing');
    if (!notification.user_id) throw new Error('user_id missing');
    if (!notification.departmentId) throw new Error('departmentId missing');
    if (!notification.allowAction) throw new Error('allowAction missing');
    if (!notification.departmentName) throw new Error('departmentName missing');
    for (let i = 0; i < notification.allowAction.length; i++) {
      if (notification.allowAction[i].type == undefined) throw new Error('type missing or incorrect');
      if (notification.allowAction[i].active == undefined) throw new Error('active missing or incorrect');
    }
    this.id = notification.id;
    this.user_id = notification.user_id;
    this.departmentId = notification.departmentId;
    this.allowAction = notification.allowAction;
    this.departmentName = notification.departmentName;
  }
}