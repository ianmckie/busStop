import { Component, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit{

  @Input() modalTitle: string= "";
  @Input() modalBody: string = "";
  @Input() buttonText: string = "";

  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor() {}

  ngOnInit(){}

  ngOnChanges(){
    this.dataContainer.nativeElement.innerHTML = this.modalBody; 
  }
}
