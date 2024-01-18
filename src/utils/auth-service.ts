const getToken = (): string | null => localStorage.getItem('jwtToken');
const setToken = (token: string): void => localStorage.setItem('jwtToken', token);
const removeToken = (): void => localStorage.removeItem('jwtToken');

export const authService = {
  getToken,
  setToken,
  removeToken,
};
