import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Selam bu benim nestjs öğrenme todo uygulamam /todos yazarak tüm todo ları görebilirsiniz.';
  }
}
