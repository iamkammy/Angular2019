import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `

    <!-- string pipes -->
          <h2>{{name}}</h2>
          <h2>{{name | lowercase}}</h2>
          <h2>{{name | uppercase}}</h2>
          <h2>{{message | titlecase}}</h2>
          <h2>{{name | slice:3}}</h2>
          <h2>{{name | slice:3:6}}</h2>

          <h2>{{person |  json}}  it is json pipe</h2> 
  
          <!-- number pipes -->
          <h2>{{5.678 | number:'1.2-3'}}</h2>
          <h2>{{5.678 | number:'3.4-5'}}</h2>
          <h2>{{5.678 | number:'3.1-2'}}</h2>

          <h2>{{ 0.25 | percent}} </h2>

          <h2>{{ 0.25 | currency}} </h2>
          <h2>{{ 0.25 | currency:'INR'}} </h2>
          <h2>{{ 0.25 | currency:'GBP': 'code'}} </h2>

          <h2>{{date}} </h2>
          <h2>{{date | date:short}} </h2>
          <h2>{{date | date:shortDate}} </h2>
          <h2>{{date | date:shortTime}} </h2>

          <h2>{{date | date:large}} </h2>

                `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
public name = 'Codeevolution';
public message = "welcome to code evolution";
public person = {
  "firstname": "John",
  "lastname": "Doe"
}
 public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
