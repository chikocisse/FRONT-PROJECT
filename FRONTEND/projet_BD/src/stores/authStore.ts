import { create } from 'zustand';
import { User, LoginCredentials, RegisterCredentials } from '../types/auth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

// Simulation d'API en attendant le backend
const fakeApiCall = (data: any): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  login: async (credentials) => {
    set({ isLoading: true });
    try {
      // Simuler un appel API
      const user = await fakeApiCall({
        id: '1',
        email: credentials.email,
        role: 'student',
        name: 'Aminatou Wahab',
      });
      set({ user, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (credentials) => {
    set({ isLoading: true });
    try {
      const user = await fakeApiCall({
        id: '1',
        ...credentials,
      });
      set({ user, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    set({ user: null });
  },

  resetPassword: async (email) => {
    set({ isLoading: true });
    try {
      await fakeApiCall({ success: true });
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
}));