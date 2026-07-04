import { AddFcm } from '../../domain/index';

export abstract class IFcmTokenRepository {
  abstract addFcmToken(fcmToken: AddFcm): Promise<any>;
  abstract getFcmTokenByUserId(id: string): Promise<any>;
}