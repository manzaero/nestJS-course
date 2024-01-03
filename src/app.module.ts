import { Module } from '@nestjs/common';
import { TaskController } from './app.controller';
import { TaskService } from './app.service';
import { TaskModule } from './task/task.module';

@Module({
	imports: [TaskModule],
	controllers: [TaskController],
	providers: [TaskService],
})
export class AppModule { }
