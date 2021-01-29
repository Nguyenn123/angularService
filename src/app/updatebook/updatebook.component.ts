import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  id = 0;
  book: Book = {};

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.book = new Book();
    this.bookService.getBook(this.id)
      .subscribe(res => {
        this.book = res;
        console.log(this.book);
      });

  }

  updateBooks(): void{
    // debugger
    this.bookService.updateBook(this.id, this.book)
      .subscribe(res => {
        this.bookService.createBook(this.book).subscribe((resp: any) => this.book = resp);
        this.gotoList();
        console.log(res);
      });

  }
  onSubmit(): void{
    this.updateBooks();
  }

  gotoList(): void{
    this.router.navigate(['']);
  }

}
