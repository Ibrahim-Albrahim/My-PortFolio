import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [
    {'name': 'telegram',       'link': 'https://t.me/hemo7f12'},
    {'name': 'whatsapp',       'link': 'https://wa.me/966565091858'},
    {'name': 'twitter',        'link': 'https://twitter.com/hemo7f12'},
    {'name': 'envelope',       'link': 'mailto: hemo7f12@gmail.com'},
    {'name': 'snapchat-ghost', 'link': 'https://www.snapchat.com/add/hemo7ss'},
    {'name': 'instagram',      'link': 'https://www.instagram.com/hemo7f12/'},
    {'name': 'linkedin',       'link': 'https://www.linkedin.com/in/ibrahim-albrahim-hemo7f12/'},
    {'name': 'github',         'link': 'https://github.com/ibrahim-albrahim/'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
