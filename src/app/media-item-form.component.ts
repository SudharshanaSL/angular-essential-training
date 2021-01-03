import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      // Validators.pattern will return a regex validator function
      // Validators.compose will validate against multiple validator functions by taking array of validators
      name: new FormControl('', Validators.compose([
        Validators.required,
        // will allow only a-z A-Z 0-9 whitespace - _ /
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      // pass custom validator function reference
      year: new FormControl('', this.yearValidator),
    });
  }

  // custom validator function
  yearValidator(control: FormControl) {
    if(control.value.trim().length === 0) {
      return null;
    }
    // specifies base of given number string
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if(year >= minYear && year <= maxYear) {
      return null;
    }
    // below year property will be set in errors property of formGroup
    return {
      year: true
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
