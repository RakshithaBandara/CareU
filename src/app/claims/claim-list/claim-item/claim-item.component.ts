import { Component,OnInit,Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimEditComponent } from '../claim-edit/claim-edit.component';
import { ClaimDetailComponent } from '../../claim-detail/claim-detail.component';
import { Claim } from '../../claim.model';

@Component({
  selector: 'app-claim-item',
  standalone: true,
  imports: [
    CommonModule,
    ClaimEditComponent,
    ClaimDetailComponent,
  ],
  templateUrl: './claim-item.component.html',
  styleUrl: './claim-item.component.css'
})
export class ClaimItemComponent {
  @Input() claim: Claim ={} as Claim
  claimSelected = new EventEmitter<void>();

  ngOnInit(){
  }

  onSelected(){
    this.claimSelected.emit();
  }
}
