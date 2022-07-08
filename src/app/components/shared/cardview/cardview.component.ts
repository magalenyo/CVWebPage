import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardviewModel } from './model/cardview.model';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss']
})
export class CardviewComponent implements OnInit {

  @Input() model : CardviewModel;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  navigate(): void {
    
    this.router.navigate([this.model.url]);
  }

}
