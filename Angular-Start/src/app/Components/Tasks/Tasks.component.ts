import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'Tasks',
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.css']
})
export class TasksComponent implements OnInit {

  // public items = [];
  // public newTask;

  // add task
  // public addToLost(){
  //   if(this.newTask==''){} else
  //   {this.items.push(this.newTask);
  //   this.newTask ='';}
  // }

  // delete task
  // public deleteTask(index) {
  //   this.items.splice(index, 1);
//}
  constructor() { }

  ngOnInit() {
  }

}
