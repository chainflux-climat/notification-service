import { RoleService } from '../services/Role.service'
import { UserService } from "../services/User.service";

export class Util {

  constructor() { }

  async getDepartmentInfo(user: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (!user) return reject(new Error("user not found"));

      let _user_uuid = user._user_uuid;
      if (!_user_uuid) return reject(new Error("user_uuid not found"));

      let jwtToken = user.jwtToken;
      if (!jwtToken) return reject(new Error("jwtToken not found"));
      let _department = await new UserService().getUserDepartment(_user_uuid, jwtToken);
      // if (!_department || !_department.roles || _department.roles.length == 0 || !_department.organization_id) return reject(new Error("department details missing!"));
      if (!_department || !_department.data) return reject(new Error("department details missing!"));

      return resolve(_department.data);
    });
  }

  async getUserInfo(user: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (!user) return reject(new Error("user not found"));

      let _user_uuid = user._user_uuid;
      if (!_user_uuid) return reject(new Error("user_uuid not found"));

      let jwtToken = user.jwtToken;
      if (!jwtToken) return reject(new Error("jwtToken not found"));
      let _user = await new UserService().findUserByUUID(_user_uuid, jwtToken);
      if (!_user || !_user.success || !_user.data) return reject(new Error("user details not found gold->user service error! " + _user.data));

      return resolve(_user.data);
    });
  }

  async hasPermission(user: any, isOwnerOrMember: boolean, action: string, roles: string[], resource: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      let jwtToken = user.jwtToken;
      if (!jwtToken) return reject(new Error("jwtToken not found"));

      let userPermissionResponse = await new RoleService().isPermissionGranted(jwtToken, isOwnerOrMember, action, roles, resource);

      if (!userPermissionResponse || !userPermissionResponse.data) return reject(new Error("permission not found"));

      let granted: boolean = userPermissionResponse.data;

      if (granted == true) return resolve(true);

      return resolve(false);
    });
  }
}