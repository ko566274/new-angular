import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-angular';
  addClick() {
    let nums = [7, 11, 15,2]
    let target = 9
    nums.forEach((item, index) => {
      if (item < target) {
        console.log([index, nums.indexOf(target - item)])
      }
    })
  }
}
