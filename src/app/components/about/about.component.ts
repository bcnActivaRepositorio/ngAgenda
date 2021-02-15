import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'pr-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {


  title: string = "Mail Me";
  submitted: boolean = false;

constructor( ) {

 }
 userMails = new FormGroup({
  name: new FormControl('', [
    Validators.required,
   // Validators.pattern("[\p{L}]"),
    Validators.minLength(3)
  ]),
  username: new FormControl('', [
    Validators.required,
   // Validators.pattern("[\p{L}0-9]"),
    Validators.minLength(3)
  ]),
  myMail: new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    Validators.email
  ])
});

// getter
get controlMe() {

  return this.userMails.controls;
}

  ngOnInit(): void {
  }
  // see the data frm the form
  submitMe(){
    console.log(this.userMails.value);
    this.submitted = true
     if( this.userMails.invalid){
      console.log('no submit works');
      return;
    }
    alert('All fields completed');
  }
}
