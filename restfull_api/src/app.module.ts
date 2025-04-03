import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/modules/task.module';
import { SubjectModule } from './subjects/modules/subject.module';

@Module({
  imports: [TaskModule, SubjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}