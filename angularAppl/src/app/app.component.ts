import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAppl';
  username: string = 'Ashish';
  delete = "Delete";
  border = "1px solid black";
  changecolor= "Change Color";
  

  public arr = [
    {
      "RollNo": "1",
      "name": "viren",
      "registration": true,
    },
    {
      "RollNo": "2",
      "name": "karan",
      "registration": false,
    },
    {
      "RollNo": "2",
      "name": "raj",
      "registration": true,
    }
  ]
  public thead = [
    {
      "th1": "Roll No",
      "th2": "Name",
      "th3": "Action"
    }
  ]
  selectd:string | undefined;
  getDay(data:any): void{
    this.selectd=data.target.value;
  }
  myclass:boolean =true;
}
