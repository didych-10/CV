import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [
    {
      name: 'ToВ "Elserv" (freelance project)',
      url: '/assets/img/elserv.jpg'
    },
      {
      name: 'Layout',
      url: '/assets/img/layout.jpg'
    },

    {
      name: 'Chat',
      url: '/assets/img/chat.jpg'

    },
    {
      name: 'Lending Page',
      url: '/assets/img/lending.jpg'
    }

  ];
  some: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

