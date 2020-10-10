import { Component, OnInit } from '@angular/core';
import * as countries from './../../assets/countries.json';
import { Country } from '@app/models';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  selected: Country;
  constructor() {
    //console.log(countries);
    this.selected = countries[10];
    console.log(this.selected);
  }

  ngOnInit(): void {}
}
