import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-machining-info',
  templateUrl: './general-machining-info.component.html',
  styleUrls: ['./general-machining-info.component.css']
})
export class GeneralMachiningInfoComponent implements OnInit {

  constructor() { }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  scrollToMetricConv() {
    window.scrollTo(0, 1000);
  }

  scrollToTDL() {
    window.scrollTo(0, 2200);
  }  

  ngOnInit(): void {
  }

}
