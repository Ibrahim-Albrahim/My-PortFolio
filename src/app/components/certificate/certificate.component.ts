import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements OnInit {
  certificates = [
    {path: 'udacity nanodegree full stack web developer'},
    {path: 'udacity front end development track'},
    {path: 'udacity full stack development track'},
    {path: 'udacity android development track'},
    {path: 'edraak android development'},
  ]
  closeResult!: string;
  constructor(private modalService: NgbModal) { 
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true , size: 'xl'});
  }

  ngOnInit(): void {
  }

}
