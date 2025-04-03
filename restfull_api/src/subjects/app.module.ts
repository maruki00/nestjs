import { Module } from '@nestjs/common';
import { SubjectModule } from './modules/subject.module';

@Module({
  imports: [SubjectModule],
  controllers: [],
  providers: [],
})

export class AppModule {}