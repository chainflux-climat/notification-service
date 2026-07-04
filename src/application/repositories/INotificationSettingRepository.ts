import { AddNotificationSetting, UpdateNotificationSetting } from '../../domain/index';

export abstract class INotificationSettingRepository {
  abstract AddNotificationSetting(notification: AddNotificationSetting): Promise<any>;
  abstract UpdateNotificationSetting(notification: UpdateNotificationSetting): Promise<any>;
}
