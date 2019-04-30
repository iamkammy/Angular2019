import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
  <button (click)="gotoDepartments()" class="btn btn-secondary d-block">Back </button>
    <h3>You selected department with id ={{departmentId}} </h3> 

    <p> 
    <button (click)="showOverview()">Overview </button>
    <button (click)="showContact()"> contact </button>
    </p>
    <router-outlet> </router-outlet>

    <a (click)="goPrevious()" class="btn btn-info mr-2">Previous</a>
    <a (click)="goNext()" class="btn btn-warning" >Next</a>

    
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      if(id>5){ alert("No more departments");}

      else{
        this.departmentId = id;
      }
    } );
  }
  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments', previousId])
  }

  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments', nextId])
  }
  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}]) 
  }
  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
