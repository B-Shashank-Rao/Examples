import { Component , OnInit , ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  
  

  constructor(){
    
  }

  ngOnInit(): void {

  }
  message = "";
  index = 0;  
  title = 'examples';
  myclass = "FR";
  color = "yellow";
  hide : boolean = false;
  val:any
  bgcolor:any;
  flag : boolean = false;


  show(){
    this.hide = !this.hide;
  }

  display(eve:any){
    console.log(eve.value)

  }

  fill(){
    this.flag = !this.flag;
    this.bgcolor = "red";
  }
}
