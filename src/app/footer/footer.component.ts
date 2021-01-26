import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
myName: string = 'robert garcia';
myMail: string = 'theclick36@gmail.com';
myWeb: string = 'https://theclick36.com';
myApp: string = 'dietary';
  constructor() { }

  ngOnInit(): void {
  }

}
