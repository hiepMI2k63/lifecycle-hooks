import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  name:string ="";
  message: string  = "say hi";
  printable = false;
  index:number = 1;
  flag_color:boolean = true;//
  messages=[];
  private _message!: string ;

public get value() : string {
  return this._message;
}


  contacts = [
    {
      id:1,
      name:'hiep',
      job:"dev",
      avatar:{
        url:"https://angular.io/assets/images/logos/angular/shield-large.svg"
      }
    },
    {
      id:2,
      name:'hiep',
      job:"dev",
      avatar:{
        url:"https://angular.io/assets/images/logos/angular/shield-large.svg"
      }
    },
    {
      id:3,
      name:'hiep',
      job:"dev",

    },


  ];

changeTab(index:number)
  {
    this.index = index;

  }
  constructor() { }

  ngOnInit(): void {
    console.log("hihiihhi");
  }
  onClick(event:Event)
  {
      // console.log("changed");
      // this.messages.push(event.target.value);
  }


}
