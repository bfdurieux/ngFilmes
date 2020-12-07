import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';
import { Filme } from '../Filme';
import * as data from "../FILMES.json";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page = 1;
  perPage = 5;
  head = 0;
  tail = this.perPage
  filmes:Filme[] = (data as any).default;
  count = this.filmes.length;
  isDisabledBtnPrev = true;
  isDisabledBtnNext = this.count > this.perPage ? false : true;
 
  @Output() filmesInPage = new EventEmitter();

  constructor() { 
  }
  
  ngOnInit() {
    timer(10).subscribe(() => {
      this.populatePage();
    });
  }

  prevPage(): void {
    this.page--;
    if(this.page == 1){
      this.isDisabledBtnNext = false;
      this.isDisabledBtnPrev = true;
      this.head = 0;
    }else{
      this.isDisabledBtnNext = false;
      this.isDisabledBtnPrev = false;
      this.head -= this.perPage;
    }
    this.populatePage();
  }

  nextPage(): void {
    this.page++;
    if(this.isLastPage()){
      this.isDisabledBtnNext = true;
      this.isDisabledBtnPrev = false;
    }else{
      this.isDisabledBtnNext = false;
      this.isDisabledBtnPrev = false;
    }
    this.head += this.perPage
    this.populatePage();
  }

  totalPages(): number {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  isLastPage(): boolean {
    return this.perPage * this.page >= this.count;
  }


  populatePage(){
    let tempFilmes: Filme[] = [];
 
    if(this.isLastPage()){
      this.tail = this.count;
    }else{
      this.tail = this.page * this.perPage;
    }

    for(let i = this.head; i < this.tail; i++){
      tempFilmes.push(this.filmes[i]);
    }

    this.filmesInPage.emit(tempFilmes);
  }
}