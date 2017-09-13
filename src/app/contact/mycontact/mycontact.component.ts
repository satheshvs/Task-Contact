import { contacts } from './data';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.component.html',
  styleUrls: ['./mycontact.component.css']
})


export class MycontactComponent implements OnInit {
  data = contacts;
  constructor() { }

  ngOnInit() {

  console.log(this.data)
  }
}





