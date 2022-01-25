import { Component, OnInit } from '@angular/core';
import {fadeInLeftOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations:[fadeInLeftOnEnterAnimation({ anchor: 'enter'})]
})
export class HomeComponent implements OnInit {
  state=true;
  constructor() { }

  ngOnInit(): void {
  }

  
  

}
