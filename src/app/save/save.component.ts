import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  list:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
