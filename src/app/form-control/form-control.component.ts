import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  constructor() { }
  ngOnChanges(){
    console.log("since component is not receiving value ");
  }
@Output()
@Input() first:string|unknown = new EventEmitter();

  ngOnInit(): void {
    console.log("init event called");
  }

  ngDoCheck(){
    console.log("checking for imp things");
  }
  ngAfterContentInit(){
    console.log("after content init");
  }
  onClick(){
    console.log("button clicked",)
  }
}
