import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  showCoordinates(event: MouseEvent): void {
    const x = event.clientX;
    const y = event.clientY;
    alert(`Coordinate: x = ${x}, y = ${y}`);
}
}
