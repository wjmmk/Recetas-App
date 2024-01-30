import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World PAPITO, Estamos una vez más de VUELTA.';
  }
}
