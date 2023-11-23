import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { ClaimsComponent } from './claims/claims.component';
import { ClaimDetailComponent } from './claims/claim-detail/claim-detail.component';
import { ClaimListComponent } from './claims/claim-list/claim-list.component';
import { ClaimItemComponent } from './claims/claim-list/claim-item/claim-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ClaimsComponent,
    ClaimDetailComponent,
    ClaimListComponent,
    ClaimItemComponent,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'careU';

  loadedFeature = 'claim'

  onNavigate(feature:string){
    this.loadedFeature=feature;

  }
}
