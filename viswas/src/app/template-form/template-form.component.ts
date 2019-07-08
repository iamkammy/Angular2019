import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  topics = ['Angular', 'React', 'Nodejs'];
  constructor(private enrollment: EnrollmentService) { }
  userModel = new User('Rob', 'rob@test.com', 4545454545, 'default', 'morning',  true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  ngOnInit() {
  }
  
  tug(userForm){
    console.log(userForm.value);
  }

  validateTopic(value){
    if(value == 'default'){
      this.topicHasError = true;
    } else{
      this.topicHasError = false;
    }
  }
  onSubmit(){
    console.log(this.userModel);
    this.submitted = true;
    this.enrollment.enroll(this.userModel)
    .subscribe(
      data  => console.log("Success!",data),
      error => this.errorMsg = error.statusText
    )
  }
}
