import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detailbook',
  templateUrl: './detailbook.component.html',
  styleUrls: ['./detailbook.component.css']
})
export class DetailbookComponent implements OnInit {
id = 0;
book: Book = {};
  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(res => this.book = res);
    console.log(this.book);
  }

  list(): void{
    this.router.navigate(['']);
  }

}
