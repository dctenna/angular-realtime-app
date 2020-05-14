import { Component, OnInit, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ANIMAL_LIST } from './animals-list';
import { GenerateRandomAnimalsService } from './get-random-animal.service';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select-random-animals',
  templateUrl: './select-random-animals.component.html',
  styleUrls: ['./select-random-animals.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectRandomAnimalsComponent),
      multi: true,
    },
  ],
})
export class SelectRandomAnimalsComponent implements OnInit, ControlValueAccessor {
  animals = ANIMAL_LIST;
  animalsList: string[];
  onChange: (val: string[]) => void;
  animalNameControl = new FormControl(null);

  onTouched: () => void = () => {};

  constructor(
    private _generateRandomAnimalsService: GenerateRandomAnimalsService
  ) {}

  ngOnInit() {
    this.animalsList = this._generateRandomAnimalsService.getRandomList(
      this.animals
    );
  }

  registerOnChange(fn: (val: string[]) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string[]) {
    this.animalNameControl.setValue(value);
  }

  onSelectionChange(event: MatSelectChange) {
    this.onChange(event.value);
    this.onTouched();
  }
}
