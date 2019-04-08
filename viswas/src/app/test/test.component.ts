import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  template: `<div>
                  HEllo world
                  <p> hello man new things area here</p> 

                  <h4> Welcome {{name}} </h4>
                  <h4>{{4*5}} </h4>

                  <h4> {{"Welcome " + name}} </h4>

                  <h4>  {{name.length}} </h4>

                  <h2> {{name.toUpperCase()}} </h2>

                  <h2 [style.color]="'orange'"> {{greetUser()}} </h2>

                  <button (click)="onClick($event)">Greet</button>
                  {{greeting}}
              </div>
              
              <div>
              <input [id]="myId" type= "text" value="viswas">
              <input [disabled]="isDisabled"  [id]="myId" type= "text" value="kamran">
              </div>

              <div> 
              <br><br>
              <input type="text" #myInput>
              <button (click)="logMessage(myInput)">log</button>
              </div>
              <div>
              <input [(ngModel)]="nameinput" type="text"> {{nameinput}}
              </div>
              
              <i>{{"HEllo"+ parentData}} </i>
              <button (click)="fireEvent()"> Send Event </button>
              `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }
public name:string= 'viswas';

public myId= "testId";
public greeting = "";
public isDisabled = false;
public nameinput;

@Input() public parentData;

@Output() public childEvent = new EventEmitter();

  ngOnInit() {
  }
  greetUser(){
    return "hello  " + this.name;
  }
  onClick(event){
    // alert('hsasa');
    console.log(event);
   setTimeout ( ()=>{this.greeting = event.target.type},2000);
  }
  logMessage(val){
    console.log(val);
  }

  fireEvent(){
     this.childEvent.emit('Hey Code evolution');
  }
}
