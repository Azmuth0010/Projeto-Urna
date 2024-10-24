import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExternoComponent } from "./externo/externo.component";
import { InternoComponent } from "./interno/interno.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExternoComponent, InternoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ControleDeAcesso';
}
