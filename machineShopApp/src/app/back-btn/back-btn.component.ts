import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.css']
})
export class BackBtnComponent implements OnInit {
  @Output() backURL = new EventEmitter<string>();

  constructor(private router: Router) { }

  callBackURL(){
    this.backURL.emit();
  }

  ngOnInit(): void {
  }

}
