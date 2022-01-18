import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  
  term: string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(
      res => {this.onDebounce.emit(res);
      }
    )
  }

  searchTerm(){
    this.search.emit(this.term);    
  }

  keyPress(){
    this.debouncer.next(this.term);
  }
}
