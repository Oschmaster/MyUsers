import {Component, EventEmitter, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { faPen, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-round-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.css']
})
export class RoundButtonComponent {

    protected readonly faPen = faPen;
    protected readonly faTrashCan = faTrashCan;
    protected readonly faPlus = faPlus

    @Input() type!: string;
}
