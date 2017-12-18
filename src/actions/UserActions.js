export const REGISTER_USER = 'REGISTER_USER'; 

export const register = User => {
  return {
    type: REGISTER_USER,
    user: User
  }
}
