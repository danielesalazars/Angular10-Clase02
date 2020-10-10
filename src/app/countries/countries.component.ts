import { Component, OnInit } from '@angular/core';
import * as countries from './../../assets/countries.json';
import { Country } from '@app/models';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [UpperCasePipe],
})
export class CountriesComponent implements OnInit {
  selected: Country;
  constructor(private upperCasePipe: UpperCasePipe) {
    //console.log(countries);
    this.selected = countries[10];
    console.log(this.selected);
  }

  ngOnInit(): void {}

  send(name: string): void {
    name = this.upperCasePipe.transform(name);
    console.log(name);
  }
}
