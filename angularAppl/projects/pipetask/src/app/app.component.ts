import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipetask';
  search = ""
  table=[
    {
      name: "Ashish",
      rollno: 1,
      mob: 904572586
    },
    {
      name: "raj",
      rollno: 2,
      mob: 948542489
    },
    {
      name: "viren",
      rollno: 3,
      mob: 784562135
    }
  ]
    
}
