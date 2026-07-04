export abstract class IDBConnection {
  abstract addNotification(query: any): any;
  abstract addFcmToken(query: any): any;
  abstract getFcmTokenByUserId(query: any): any;
}