

import { Module } from '@nestjs/common';
import { TaskController } from '../controllers/task.controller'
import { TaskService } from '../services/task.service';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
  })
export class TaskModule { }
