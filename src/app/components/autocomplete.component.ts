import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit{
  searchTerm = new FormControl();

  cities: string[] = ['Miri', 'Bintulu', 'Bekenu', 'Sibuti', 'Selangau', 'Tatau', 'Dalat', 'Sibu', 'Sarikei', 'Daro', 'Oya', 'Mukah'];

  filteredCities!: Observable<string[]>;

  constructor(){}

  ngOnInit(): void {
    this.filteredCities = this.searchTerm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[]{
    const filteredValue = value.toLowerCase();
    return this.cities.filter(city => city.toLowerCase().includes(filteredValue));
  }
}
