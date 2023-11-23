import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { ClaimItemComponent } from './claim-list/claim-item/claim-item.component';
import { ClaimEditComponent } from './claim-list/claim-edit/claim-edit.component';
import { Claim } from './claim.model';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [
    CommonModule,
    ClaimDetailComponent,
    ClaimItemComponent,
    ClaimListComponent,
    ClaimEditComponent
  ],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent implements OnInit{
  selectedClaim: Claim ={} as Claim;

  constructor(){}

  ngOnInit(){}

}
