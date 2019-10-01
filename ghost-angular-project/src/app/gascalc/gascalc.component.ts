import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gascalc',
  templateUrl: './gascalc.component.html',
  styleUrls: ['./gascalc.component.scss']
})

export class GascalcComponent implements OnInit {

  mpg = 0;     
  dist = 0;    
  cost = 0;    
  constructor() { }  
  ngOnInit() {   
                
  }
}
