import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-analyse',
    templateUrl: "./analyse.component.html",
    styleUrls: ["./analyse.component.css"]
  })
export class AnalyseComponent{
onAnlayse(form: NgForm) {
  if (form.invalid) {
    return;
  }

}
}