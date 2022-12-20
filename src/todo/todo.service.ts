import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from './entities/create.entity';
import { UpdateTodoDto } from './entities/update.entity';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private readonly model: Model<TodoDocument>) {}
  async findAll(): Promise<Todo[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.model.findById(id).exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<Todo> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
