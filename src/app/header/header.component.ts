import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";

@Component({
    selector : 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
})
    
export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);
    }
}