import { Injectable } from '@nestjs/common';
import { TaskDto } from './task/task.dto';

@Injectable()
export class TaskService {

	private TASK = [
		{
			id: 1,
			name: 'Record a video',
			isDone: false
		}
	]

	getAll() {
		return this.TASK
	}

	create(dto: TaskDto) {

		this.TASK.push({
			id: this.TASK.length,
			name: dto.name,
			isDone: false
		})

		return this.TASK
	}

	toggleComplete(id: string) {
		const task = this.TASK.find(task => task.id === +id)
		task.isDone = !task.isDone
		return task
	}
}
