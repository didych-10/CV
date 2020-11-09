import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollTo() {
    let footer = document.getElementById('footer');
    window.scroll({
      left: 0,
      top: footer.offsetTop,
      behavior: 'smooth'
    })
  }

}
