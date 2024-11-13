import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonDirective } from '../../libs/ui/ui-button-helm/src/lib/hlm-button.directive';
import { HlmCardDirective } from "../../libs/ui/ui-card-helm/src/lib/hlm-card.directive";
import { HlmCardHeaderDirective } from "../../libs/ui/ui-card-helm/src/lib/hlm-card-header.directive";
import { HlmCardTitleDirective } from "../../libs/ui/ui-card-helm/src/lib/hlm-card-title.directive";
import { HlmCardDescriptionDirective } from "../../libs/ui/ui-card-helm/src/lib/hlm-card-description.directive";
import { HlmCardContentDirective } from "../../libs/ui/ui-card-helm/src/lib/hlm-card-content.directive";
import { HlmCardFooterDirective } from "../../libs/ui/ui-card-helm/src/lib/hlm-card-footer.directive";
import { RolesComponent } from "../app/components/roles/roles.component"
import { MasterComponent } from './components/master/master.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HlmButtonDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    HlmCardFooterDirective,
    MasterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
}
