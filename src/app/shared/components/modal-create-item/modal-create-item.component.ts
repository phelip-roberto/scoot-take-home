import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { ToDoItem } from 'src/app/shared/model/toDoItem';
import { ToDoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-modal-create-item',
  templateUrl: './modal-create-item.component.html',
  styleUrls: ['./modal-create-item.component.scss']
})
export class ModalCreateItemComponent implements OnInit {

  public createItemForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
  });
  
  constructor(
    public dialogRef: MatDialogRef<ModalCreateItemComponent>,
    private toDoService: ToDoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  createNewItem() {
    let newItem = new ToDoItem(
      Guid.create().toString(),
      this.createItemForm.controls['description'].value,
      this.createItemForm.controls['priority'].value,
      this.createItemForm.controls['dueDate'].value
    );
    
    this.toDoService.addToDoItem(newItem).subscribe({
      next: (res) => {
        this.clearForm();
        this.data.onSubmitCallback();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  clearForm = () => {
    this.createItemForm.reset();
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
