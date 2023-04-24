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
  }


  public openDialog() {
    const dialogRef = this.dialog.open(ModalCreateItemComponent, {
      width: 'calc(100% - 60px)',
      height: 'calc(60% - 20vh)',
      autoFocus: false,
      maxWidth: '600px',
      data: {
        onSubmitCallback: () => {
        }
      }
    });

  }


}
