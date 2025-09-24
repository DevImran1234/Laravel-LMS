export const home = () => '/';
export const dashboard = () => '/dashboard';
export const login = () => '/login';
export const register = () => '/register';
export const logout = () => '/logout';

export const profile = {
  edit: () => '/settings/profile/edit',
};

export const password = {
  edit: () => '/settings/password/edit',
  request: () => '/password/request',
};

export const appearance = {
  edit: () => '/settings/appearance/edit',
};

export const twoFactor = {
  show: () => '/settings/two-factor',
  enable: () => '/settings/two-factor/enable',
  disable: () => '/settings/two-factor/disable',
};

export const verification = {
  send: () => '/email/verification-notification',
};

// Add other placeholder exports as needed
