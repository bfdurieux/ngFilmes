import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../Filme';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  filmes = new Array<Filme>();
  currentPage: number = 1;
  testPage: number;
  perPage: number = 5;
  index: number = 0;


  
  constructor(private pagination: PaginationComponent) {}
  
  ngOnInit(): void {
  }

  populate(arr){
    this.filmes = arr;
  }


}





