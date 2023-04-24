import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateItemComponent } from 'src/app/shared/components/modal-create-item/modal-create-item.component';
import { ToDoItem } from 'src/app/shared/model/toDoItem';
import { ToDoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public toDoItems!: ToDoItem[];
  public toDoItem!: ToDoItem;

  constructor(
    private todoService: ToDoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getToDoItems();
  }


  public openDialog() {
    const dialogRef = this.dialog.open(ModalCreateItemComponent, {
      width: 'calc(100% - 60px)',
      height: 'calc(60% - 20vh)',
      autoFocus: false,
      maxWidth: '600px',
      data: {
        onSubmitCallback: () => {
          this.getToDoItems();
        }
      }
    });

  }

  private getToDoItems() {
    this.todoService.getToDoList().subscribe({
      next: (res) => {
        this.toDoItems = res.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0));
      },
      error: (err) => console.log(err)
    })
  }

  public filterByString(str: string) {
    this.toDoItems = this.toDoItems.filter(e => e.description.toLocaleLowerCase().includes(str.toLocaleLowerCase()))
        .sort((a,b) => a.description.includes(str) && !b.description.includes(str) ? 1 : b.description.includes(str) && !a.description.includes(str) ? -1 :0);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    if (filterValue.length === 0) {
      this.getToDoItems();
    }
    this.filterByString(filterValue);
  }


}
