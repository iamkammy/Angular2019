import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-list',
  template: `<h3>Department List </h3>
              <ul class="list-group w-25">
              <li class="list-group-item list-group-item-action" [class.selected]="isSelected(department)" (click)="onSelect(department)" *ngFor="let department of departments">
              <span class="badge"> {{department.id}} </span> {{department.name}}
              </li>
              </ul>
  
                  `,
  styles : ['.selected { background: #eee; }']
})
export class DepartmentListComponent implements OnInit {
departments = [
  {"id": 1, "name": "Angular"},
  {"id": 2, "name": "Node js"},
  {"id": 3, "name": "Mongo DB"},
  {"id": 4, "name": "Ruby"},
  {"id": 5, "name": "Bootstrap"},
  
]
  constructor(private router: Router, private route: ActivatedRoute) { }
public selectedId;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      if(id>5){ alert("No more departments");}

      else{
        this.selectedId = id;
      }
    } );
  }
  onSelect(department){
   
    this.router.navigate(['/departments', department.id])
  }
  isSelected(department){
    return department.id === this.selectedId;
  }

}
