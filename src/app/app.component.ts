import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
export function fibonacci(num: number): number | null {
  if (num < 0) {
    return null;
  }

  let a = 42, b = 0, temp;
  if( a && !a){}
  a = 1;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

