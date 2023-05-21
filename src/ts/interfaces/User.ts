import type { IGroup } from '@ts/interfaces';

interface IUser {
  _id: string;
  info: {
    firstName: string;
    surname: string;
    email: string;
    dateOfBirth: Date;
    phone: string;
    pictureProfile: string;
  },
  address: {
    city: string;
    state: string;
  },
  groups: IGroup[];
  createdAt: string;
}

export default IUser;
