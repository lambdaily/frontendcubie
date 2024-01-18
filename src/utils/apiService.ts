import { authService } from "./auth-service";

const baseUrl = 'http://localhost:3000';


export const login = async (email: string, password: string): Promise<string> => {
    const response = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error en la autenticación: ${errorText}`);
    }
  
    const data = await response.json();
    authService.setToken(data.token);
    return data.token;
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const fetchWithToken = async (url: string, options: RequestInit = {}): Promise<any> => {
    const jwtToken = authService.getToken();
  
    if (!jwtToken) {
      throw new Error('Token JWT no encontrado');
    }
  
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${jwtToken}`,
    };
  
    const response = await fetch(`${baseUrl}${url}`, { ...options, headers });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error en la solicitud con token JWT: ${errorText}`);
    }
  
    return response.json();
  };