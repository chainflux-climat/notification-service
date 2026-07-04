export interface INotificationSetting {
  id?: string;
  user_id: string;
  departmentId: string,
  departmentName: string,
  allowAction: IAllowAction[],
}

export interface IAllowAction {
  type: string;
  active: boolean
}

export interface IUpdateNotificationSetting {
  id: string;
  user_id: string;
  departmentId: string,
  departmentName: string,
  allowAction: IAllowAction[],
}


//allowedAction

// gold bar capture 
// ask for sample
// submitted to lab
// lab receive
// lab result
