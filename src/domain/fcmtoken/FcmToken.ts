import { IFcmToken } from './IFcmToken';
import AddFcmToken from './AddFcmToken';


export class FcmToken {
  constructor() { };

  addFcmToken(fcm_token: IFcmToken, useCase: any) {
    let _fcm_token = new AddFcmToken(fcm_token);
    return useCase.addFcmToken(_fcm_token);
  }
}