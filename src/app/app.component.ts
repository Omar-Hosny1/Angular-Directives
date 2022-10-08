import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNums: number[] = this.numbers.filter((ele) => ele % 2 == 1);
  evenNums: number[] = this.numbers.filter((ele) => ele % 2 == 0);
  onlyOdd = false;
  value: number = -10;
  completed: boolean = false;
}
