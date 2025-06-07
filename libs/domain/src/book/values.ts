export type Username = string & { __brand: 'username' };

export function createUsername(v: string): Username {
  if (v.length > 5) {
    throw new Error('username too long');
  }
  return v as Username;
}
