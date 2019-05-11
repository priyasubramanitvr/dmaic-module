import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-measure',
    templateUrl: "./measure.component.html",
    styleUrls: ["./measure.component.css"]
  })
export class MeasureComponent implements OnInit{
  
  measureForm = new FormGroup({
    existingmetric: new FormControl(''),
    proposedmetric: new FormControl(''),
    gap: new FormControl('')
  });
    
  constructor(
    private router:Router) {}

  
     ngOnInit(){

     }
    onclick(){
        this.router.navigate(['/usertable']);
      }
}