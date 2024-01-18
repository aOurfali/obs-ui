import { Permission } from './permission';

export class Role {
  constructor(
    public name = '',
    public description = '',
    public permissions: Permission[] = []
  ) { }

  public id = '';
  public usersCount = 0;
}