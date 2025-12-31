'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { hydrate } from './slices/authSlice';
import { store } from './store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedUser = localStorage.getItem('auth_user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        store.dispatch(hydrate(user));
      } catch (e) {
        console.error('Failed to parse saved user', e);
        localStorage.removeItem('auth_user');
      }
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
