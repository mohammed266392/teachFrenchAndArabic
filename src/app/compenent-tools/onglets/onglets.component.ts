import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onglets',
  templateUrl: './onglets.component.html',
  styleUrls: ['./onglets.component.scss']
})
export class OngletsComponent implements OnInit {
  @Input() onglets: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
