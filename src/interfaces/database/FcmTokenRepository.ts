import { AddFcm } from '../../domain/index'
import { IFcmTokenRepository } from '../../application/repositories/IFcmRepository'
import { IDBConnection } from './IDBConnection'

export class FcmTokenRepository extends IFcmTokenRepository {


  private connection: IDBConnection;

  constructor(connection: IDBConnection) {
    super();
    this.connection = connection;
  }

  async addFcmToken(fcmToken: AddFcm): Promise<any> {
    let result = await this.connection.addFcmToken(fcmToken);
    return result
  }
  async getFcmTokenByUserId(id: string): Promise<any> {
    let result = await this.connection.getFcmTokenByUserId(id);
    return result
  }
}