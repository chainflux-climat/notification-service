export interface INotificationRequest {
  type: string;
  sender: string;
  receipt: string;
  extra_data: any;
  device: string;
  subject?: string,
  messageBody?: string
}

export interface IFcmTokenRequest {
  fcm_registration_token: string;
  user: string;
  device_id: string;
  device_name: string;
  device_os: string;
}
