import { User } from './user';

export class UserEdit extends User {
  constructor(
    public currentPassword?: string,
    public newPassword?: string,
    public confirmPassword?: string) {
    super();
  }
}