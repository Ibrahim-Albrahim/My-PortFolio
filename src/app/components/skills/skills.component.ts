import { Component, OnInit } from '@angular/core';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {'name': 'Python',       'style' :'275'},
    {'name': 'php',          'style' :'175'},
    {'name': 'Java',         'style' :'200'},
    {'name': 'Kotlin',       'style' :'200'},
    {'name': 'Android',      'style' :'200'},
    {'name': 'Flask',        'style' :'250'},
    {'name': 'MySQL',        'style' :'200'},
    {'name': 'PostgressSQL', 'style' :'225'},
    {'name': 'Angular2',     'style' :'225'},
    {'name': 'ReactJS',      'style' :'225'},
    {'name': 'WordPress',    'style' :'200'},
    {'name': 'JavaScript',   'style' :'275'},
    {'name': 'HTML',         'style' :'320'},
    {'name': 'CSS',          'style' :'275'},
    {'name': 'SASS',         'style' :'275'},
    {'name': 'BootStrap',    'style' :'320'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
