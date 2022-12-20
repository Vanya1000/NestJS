import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { v4 } from 'uuid';
import { resolve } from 'path';
import { isExistPath } from './../utils/index';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = v4() + '.jpg';
      const filePath = resolve(__dirname, '..', 'static');
      const isExistPathFolder = await isExistPath(filePath);
      if (!isExistPathFolder) {
        await mkdir(filePath, { recursive: true });
      }
      await writeFile(join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      throw new HttpException(
        'File write error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
