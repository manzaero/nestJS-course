import { Controller, Get, UsePipes, ValidationPipe, Body, Post, Patch, Param } from '@nestjs/common';
import { TaskService } from './app.service';
import { TaskDto } from './task/task.dto';

@Controller('task')
export class TaskController {
	constructor(private readonly taskService: TaskService) { }

	@Get()
	async getAll() {
		return this.taskService.getAll()
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: TaskDto,) {
		return this.taskService.create(dto)
	}

	@Patch(':id')
	async toggleComplete(@Param('id') id: string) {
		return this.taskService.toggleComplete(id)
	}
}
