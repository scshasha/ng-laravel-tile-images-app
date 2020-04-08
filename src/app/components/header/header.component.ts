import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 @Output() selectedlayout = new EventEmitter<any>();
 @Output() uploadimage = new EventEmitter<any>();

 setSelectedayout(event) {
 	// console.log(event);
 	this.selectedlayout.emit(event);
 }
 upload(event) {
 	this.uploadimage.emit(event);
 }

  constructor() { }

  ngOnInit(): void {
  }



}
