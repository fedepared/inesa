import { Component, HostListener, OnInit } from '@angular/core';
import {fadeInLeftOnEnterAnimation,fadeInOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations:[
    fadeInLeftOnEnterAnimation({ anchor: 'enter'}),
    fadeInOnEnterAnimation()
  
  ]
})
export class HomeComponent implements OnInit {
  state=true;
  constructor() { }

  ngOnInit(): void {
    
  }

 
  
  
}
