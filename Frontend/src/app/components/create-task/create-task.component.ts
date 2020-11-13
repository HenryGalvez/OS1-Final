import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TasksService } from 'src/app/services/tasks.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  formG = new FormGroup({
    title: new FormControl(null,[
      Validators.required
    ]),
    description: new FormControl(null, []),
    dateEnd: new FormControl(null, [
      Validators.required
    ]),
  })

  constructor(
    private toastr: ToastrService,
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<CreateTaskComponent>
    ) { }

  ngOnInit(): void {
  }

  insertTask(){
    if(!this.formG.valid) {
      return;
    }
    this.tasksService.createTask(this.formG.value).subscribe((data:any) => {
      this.toastr.success(data.message);
      this.dialogRef.close();
    }, err => {
      this.toastr.error(err.error.message);
    })
  }

  get title(){
    return this.formG.get('title');
  }

  get description(){
    return this.formG.get('description');
  }

  get dateEnd(){
    return this.formG.get('dateEnd');
  }

}
