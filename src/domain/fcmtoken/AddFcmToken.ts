import { IFcmToken } from './IFcmToken';
import { v4 as uuidv4 } from 'uuid';
export default class AddFcmToken implements IFcmToken {
  id: string
  fcm_registration_token: string;
  user: string;
  device_id: string;
  device_name: string;
  device_os: string;

  constructor(fcm: IFcmToken) {
    if (!fcm.fcm_registration_token) throw new Error('fcm_registration_token missing');
    if (!fcm.user) throw new Error('user missing');
    if (!fcm.device_id) throw new Error('device_id missing');
    if (!fcm.device_name) throw new Error('device_name missing');
    if (!fcm.device_os) throw new Error('device_os missing');

    this.id = uuidv4();
    this.fcm_registration_token = fcm.fcm_registration_token;
    this.user = fcm.user;
    this.device_id = fcm.device_id;
    this.device_name = fcm.device_name;
    this.device_os = fcm.device_os;
  }



}