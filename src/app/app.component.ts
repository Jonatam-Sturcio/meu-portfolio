import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  templateUrl: "app.component.html",
  styleUrl: "app.component.scss"
})
export class AppComponent {
  public colapsarNavBar: boolean = false;

}
