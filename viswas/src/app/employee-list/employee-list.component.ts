import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {GitusersService} from '../gitusers.service';
@Component({
  selector: 'app-employee-list',
  template: ` 
      <h2> Employee List  </h2>
      <h3> {{errorMsg}} </h3>
      <ol>
      <li *ngFor="let employee of employees">{{employee.name}} </li>
      </ol>
  
           `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeService , private _gitservice:GitusersService) {}
  public employees = [];
public errorMsg;
public x:any;
newval:any;
  ngOnInit(){
      this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);

         this.get();
                         
  }

   get(){
    this._gitservice.getUsers() .subscribe(x => 
      {
        this.newval= x 
        console.log('thisssss',this.newval);
      }) 
               
   }
   
}
