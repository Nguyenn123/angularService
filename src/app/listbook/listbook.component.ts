import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
  book: Book = {};
  books: Book[] = [];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void{
    this.bookService.getBookList().subscribe(res => this.books = res);
  }

  detail(id: number): void{
    this.router.navigate(['detail', id]);
  }

  delete(id: number): void{
    this.bookService.deleteBook(id).subscribe(res => {
      this.book = res;
      this.reloadData();
    });
    console.log(this.book);
  }

  update(id: number): void{
    this.router.navigate(['update', id]);
  }
}
