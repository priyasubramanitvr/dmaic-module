import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
     selector: 'app-implement',
    templateUrl: "./implement.component.html",
    styleUrls: ["./implement.component.css"]
  })
export class ImplementComponent implements OnInit{

   
  implementForm = new FormGroup({
    changeplan: new FormControl(''),
    Alternativesolutions: new FormControl(''),
    teamdiscussion: new FormControl('')
  });
  ngOnInit(){

  }

}