import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { ModalCreateItemComponent } from './components/modal-create-item/modal-create-item.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';

const MaterialModules: any = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatRadioModule
];

const SharedComponents: any = [
  DataGridComponent,
  ModalCreateItemComponent
];

const EntryComponents: any = [
  ModalCreateItemComponent
];

const SharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];

@NgModule({
  declarations: [SharedComponents],
  imports: [
    SharedModules,
    MaterialModules
  ],
  exports: [
    SharedComponents,
    SharedModules,
    MaterialModules
  ],
  entryComponents: [
    EntryComponents
  ],
})
export class SharedModule { }