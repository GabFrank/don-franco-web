import { Platform } from '@angular/cdk/platform';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from './pages/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('container', { static: true }) container: HTMLElement | undefined;

  mobileQuery!: MediaQueryList;
  orange = '#c7460d';
  innerH: number | undefined;
  slides: string[] = [
    'assets/side-back.jpg',
    // 'assets/f1.jpg',
    // 'assets/f2.jpg'
  ]
  arrowBottomVar = '';
  scrollHideen = false;
  constructor(
    private matDialog: MatDialog
  ) {
    this.innerH = window.innerHeight - 80;
    this.arrowBottomVar = this.innerH + 'px';
    // window.addEventListener("scroll", () => {
    //   let value = window.scrollY;
    //   console.log(window);
    //   console.log(this.container);

    // });
  }

  onMenuOpen() {
    this.matDialog.open(MenuComponent,
      {
        width: '100vw',
        height: '100vh',
        maxHeight: '100vh',
        maxWidth: '100vw'
      }
    )
  }

  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.scrollHideen = true;
    } else {
      this.scrollHideen = false;
    }
  }

}
