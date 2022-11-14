import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<MenuComponent>
  ) { }

  ngOnInit(): void {
  }

  onClear(){
    this.matDialogRef.close()
  }

  goTo(opcion: string){
    switch (opcion) {
      case 'inicio':

        break;

      default:
        break;
    }
  }

}
