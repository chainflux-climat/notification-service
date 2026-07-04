import * as SuperAgent from "superagent"

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
process.env.NODE_TLS_ACCEPT_UNTRUSTED_CERTIFICATES_THIS_IS_INSECURE = '1'

let USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://localhost:3000';


export class UserService {
  constructor() { }

  // TODO jwttoken
  getUserDepartment(user_uuid: string, jwtToken: string): any {
    return new Promise((resolve, reject) => {
      if (!user_uuid) reject(new Error('user_uuid missing'));
      if (!jwtToken) return reject(new Error("jwtToken missing"));
      SuperAgent
        .get(USER_SERVICE_URL + '/user/api/v1/users/getUserDepartment')
        .set('Authorization', 'Bearer ' + jwtToken)
        .query({
          user_uuid
        })
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            return reject(new Error('An error occurred with the user service, err: ' + err));
          }
          if (!res || !res.body) return reject(new Error('An error occurred with the user service, err: ' + err));
          resolve(res.body);
        });
    });
  }

  findUserByUUID(user_uuid: string, jwtToken: string): any {
    return new Promise((resolve, reject) => {
      if (!user_uuid) reject(new Error('user_uuid missing'));
      if (!jwtToken) return reject(new Error("jwtToken missing"));
      console.log(USER_SERVICE_URL + '/user/api/v1/users/user/' + user_uuid);
      SuperAgent
        .get(USER_SERVICE_URL + '/user/api/v1/users/user/' + user_uuid)
        .set('Authorization', 'Bearer ' + jwtToken)
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            return reject(new Error('An error occurred with the user service, err: ' + err));
          }
          if (!res || !res.body) return reject(new Error('An error occurred with the user service, err: ' + err));
          resolve(res.body);
        });
    });
  }
}