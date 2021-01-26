import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title:string = 'Angular App Dietary';
subtitle: string = ' First Angular App'
  constructor() { }

  ngOnInit(): void {
  }

}
