import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  overlay: boolean = false;
  showDialog: boolean = false;
  xCoordinate: number = 0;
  yCoordnate: number = 0;

  overlayIsActive(){
    return this.overlay
  }

  showCoordinates(event: MouseEvent): void {
    this.showDialog = true;
    this.xCoordinate = event.clientX;
    this.yCoordnate = event.clientY;
}
}
