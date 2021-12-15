import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  @Input() language: string | undefined;
  @Input() description: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
