import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private router: Router) { }

  generalMachining(){
    this.router.navigate(['/generalmachining']);
  }

  assembly(){
    this.router.navigate(['/assembly']);
  }

  engineering(){
    this.router.navigate(['/engineering']);
  }

  ngOnInit(): void {
  }

}
