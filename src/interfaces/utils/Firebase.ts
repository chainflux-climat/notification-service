
import * as admin from 'firebase-admin';
import { resolve } from 'q';
export class Firebase {
  constructor() {
    admin.initializeApp({
      // Path to the Firebase service account JSON key file.
      // Provide this via the FIREBASE_SERVICE_ACCOUNT_PATH env var; never commit the key file itself.
      credential: admin.credential.cert(process.env.FIREBASE_SERVICE_ACCOUNT_PATH as string)
    });
  }

  async sendPushNotification(registrationTokens: any, payload: any): Promise<any> {
    admin.messaging().sendToDevice(registrationTokens, payload)
      .then((response) => {
        resolve(response)
      })
  }


}