
import { IFcmTokenRepository } from "../../repositories/IFcmRepository";

export default class GetFcmToken {
  private fcmRepository: IFcmTokenRepository;

  constructor(fcmRepository: IFcmTokenRepository) {
    this.fcmRepository = fcmRepository;
  }

  getFcmTokenByUserId(id: string) {
    return this.fcmRepository.getFcmTokenByUserId(id);
  }

}