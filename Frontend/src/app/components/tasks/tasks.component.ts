import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TasksService } from 'src/app/services/tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [{title: "prueba", description: "prueba"}]

  constructor(private tasksService: TasksService,
    private toastr: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.tasksService.getTasks()
    .subscribe((res: any) => {
      this.tasks = res.data
    },err => {
      console.log(err);
      this.toastr.error(err.error.message)
    })
  }

  checkComplete(task: any){
    this.tasksService.delteTask(task).subscribe((data: any) => {
      this.toastr.success("Task Completed!!");
      this.getTasks();
    }, err => {
       console.log(err)
      this.toastr.error("Error in operation");
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getTasks();
    });
  }

}
