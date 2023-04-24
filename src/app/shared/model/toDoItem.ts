export class ToDoItem{
  constructor(
    public id: string,
    public description: string,
    public priority: string,
    public dueDate: string
  ){  }
}