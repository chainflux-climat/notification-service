
export interface INotification {
  id?: string;
  type: string;
  sender: string;
  status?: string;
  receipt?: string;
  extra_data: any;
  token?: string;
  device: string;
  read?: boolean;
}

