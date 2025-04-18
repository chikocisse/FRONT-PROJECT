export interface User {
  id: string;
  email: string;
  role: 'student' | 'professor';
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
  role: 'student' | 'professor';
}