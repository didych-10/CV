import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  hardSkills: any[] = [
    {
      name: 'HTML',
      url: '/assets/img/html.jpg'
    },

    {
      name: 'CSS',
      url: '/assets/img/css.jpg'

    },
    {
      name: 'Java script/type script',
      url: '/assets/img/jsts.jpg'
    },
    {
      name: 'Bootstrap',
      url: '/assets/img/bootstrap.png'

    },
    {
      name: 'Node js (basic)',
      url: '/assets/img/nodejs.jpg'

    },
    {
      name: 'MeSQL (basic)',
      url: '/assets/img/sql.jpg'

    },
    {
      name: 'Git/Github',
      url: '/assets/img/git.png'

    },
    {
      name: 'Angular',
      url: '/assets/img/angular.png'

    }

  ];

  softSkills: any[] = [
    {
      name: 'English (Intermediate)',
      url: '/assets/img/eng.png'
    },

    {
      name: 'Time management',
      url: '/assets/img/time.jpg'
    },

    {
      name: 'Сommunication',
      url: '/assets/img/hand.jpg'

    },
    {
      name: 'Excellent team player',
      url: '/assets/img/team.jpg'
    },
    {
      name: 'Detail oriented',
      url: '/assets/img/detail.jpg'
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
