import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-generalMachining',
    templateUrl: './generalMachining.component.html',
    styleUrls: ['./generalMachining.component.css']

})
export class generalMachiningComponent{
    windowScrolled: boolean;

    constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private activatedRoute: ActivatedRoute) { }
  
    @HostListener("window:scroll", [])
  
    onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
      }
      else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
      }
    }
  
    gmDailyInfo(){
      this.router.navigate(['/generalmachining/daily-info']);
      // this.router.navigate(['daily-info'], {relativeTo: this.activatedRoute});
    }

    gmDailyMaintance(){
      this.router.navigate(['/generalmachining/daily-maintance']);
    }
  
    gmGeneralInfo(){
      this.router.navigate(['/generalmachining/general-machining-info']);
    }
    gmMeasuringTools(){
      this.router.navigate(['/generalmachining/measuring-tools']);
    }
    gmGDnT(){
      this.router.navigate(['/generalmachining/gd-and-t']);
    }
    gmDeBurring(){
      this.router.navigate(['/generalmachining/deburring']);
    }
    gmPartsWashing(){
      this.router.navigate(['/generalmachining/partswashing']);
    }
    gmSaw(){
      this.router.navigate(['/generalmachining/saw']);
    }
    gmLWM12(){
      this.router.navigate(['/generalmachining/cat50leadwells']);
    }
    gmLWM3(){
      this.router.navigate(['/generalmachining/cat40leadwell']);
    }
    gmCinci(){
      this.router.navigate(['/generalmachining/cinci']);
    }
    gmDoosan(){
      this.router.navigate(['/generalmachining/doosan']);
    }
    gmLWL(){
      this.router.navigate(['/generalmachining/leadwell-lathe']);
    }
    gmMori(){
      this.router.navigate(['/generalmachining/moriseiki']);
    }
    gmCylinderKing(){
      this.router.navigate(['/generalmachining/cylinderking']);
    }
    gmRodHone(){
      this.router.navigate(['/generalmachining/rodhone']);
    }

    ngOnInit(): void {
    }
  



}