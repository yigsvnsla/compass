export interface User {
  id: number,
  password: string,
  last_login: string,
  is_superuser: true,
  username: string,
  first_name: string,
  last_name: string,
  email: string,
  is_staff: true,
  is_active: true,
  date_joined: string,
  groups: UserGroups[],
  user_permissions: UserPermission[]
}
export interface UserPermission {
  id: number,
  name: string,
  codename: string,
  content_type: number
}

export interface UserGroups{

}
