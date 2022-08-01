import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

  @Input('parentdata') public title:any;

  @Output() public childdata = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  callEvent(){
    this.childdata.emit('This is Child Component');
  }

}
