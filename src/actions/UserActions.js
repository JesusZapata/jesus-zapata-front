import UserConstants from '../constants';

export const register = User => {
  return {
    type: UserConstants.REGISTER_USER,
    user: User
  }
}
