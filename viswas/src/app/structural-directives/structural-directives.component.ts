import { Component, OnInit } from '@angular/core';
import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'app-structural-directives',
  template: ` <h2 *ngIf="displayName; else elseblock"> Code evolution</h2>
            <ng-template #elseblock> 
              <h2 > Name is hidden </h2>
              </ng-template>

              <div [ngSwitch]="color"> 
              <div *ngSwitchCase= "red"> You picked red color </div>
              <div *ngSwitchCase= "'blue'"> You picked blue color </div>
              <div *ngSwitchCase= "'green'"> You picked green color </div>
              <div *ngSwitchDefault> Pick again </div>
              </div>
  
              <select>
              <option *ngFor=" let m of colors; first as f; odd as o; even as e; last as l; index as i; ">{{f}} {{m}} </option>
              </select>

              `,
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  displayName = false;
  public color = '';
  public colors = ["red", "blue","green", "yelow"];
  constructor() { }

  ngOnInit() {
  }

}
