import { AddFcm } from "../../../domain/index";
import { IFcmTokenRepository } from "../../repositories/IFcmRepository";

export default class AddFcmTokens {
  private fcmRepository: IFcmTokenRepository;

  constructor(fcmRepository: IFcmTokenRepository) {
    this.fcmRepository = fcmRepository;
  }

  addFcmTokens(fcmToken: AddFcm) {
    return this.fcmRepository.addFcmToken(fcmToken);
  }

}