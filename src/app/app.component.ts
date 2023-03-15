import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-angular';
  public tableData = [
    {
      id:1,
      name:'kobe',
      position:'G',
      team:'Lakers',
      colors:[246,242,152],
      time:844905600000
    },
    {
      id:2,
      name:'curry',
      position:'G',
      team:'Warriors',
      colors:[252,205,31],
      time:1255132800000
    },
    {
      id:3,
      name:'yao',
      position:'C',
      team:'Rockets',
      colors:[230,0,43],
      time:1097366400000
    },
    {
      id:4,
      name:'james',
      position:'F',
      team:'Cavs',
      colors:[232,64,45],
      time:1065744000000
    }
  ]
  ngOnInit() {

  }
}


