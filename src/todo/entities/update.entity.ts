import { MainEntity } from './main.entity';

export class UpdateTodoDto extends MainEntity {
  completedAt: Date;
}