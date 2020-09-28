import { Component} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-farmercorner',
  templateUrl: './farmercorner.component.html',
  styleUrls: ['./farmercorner.component.css']
})
export class FarmercornerComponent {

  angForm:FormGroup;

  constructor(private fb:FormBuilder)
  {
    this.createForm();
  }
  
  createForm(){
  this.angForm=this.fb.group({
    name:['',Validators.required],
    Realtivename:['',Validators.required],
    age:['',Validators.required],
    rs:['',Validators.required],
    mn:['',Validators.required],
    Course:['',Validators.required],
    Remarks:[]
  });
  }
}
