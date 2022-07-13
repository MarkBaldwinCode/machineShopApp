import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-measuring-tools',
  templateUrl: './measuring-tools.component.html',
  styleUrls: ['./measuring-tools.component.css']
})
export class MeasuringToolsComponent implements OnInit {
  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  scrollToPartsOfMic() {
    window.scrollTo(0, 1550);
  }

  scrollToCaplipers() {
    window.scrollTo(0, 2200);
  }

  scrollToBoreGage() {
    window.scrollTo(0, 4300);
  }

  scrollToHeightGage() {
    window.scrollTo(0, 5150);
  }


  ngOnInit(): void {
  }

}
