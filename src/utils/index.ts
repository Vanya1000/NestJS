import { access } from 'fs/promises';

export const isExistPath = async (path: string): Promise<boolean> => {
  try {
    await access(path);
    return true;
  } catch (e) {
    return false;
  }
};
