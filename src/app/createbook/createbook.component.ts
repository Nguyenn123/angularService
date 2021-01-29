import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  checkVail = false;
  submitted = false;
  createForm?: FormGroup;

  constructor(private router: Router,
              private bookService: BookService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get f() {
    return this.createForm?.controls;
  }

  onSubmit(): void {
    this.checkVail = true;
    this.save();
    this.submitted = true;
  }

  save(): void {
    this.bookService.createBook(this.createForm?.value).subscribe(res => console.log(res))
    ;
  }

  gotoList(): void {
    this.router.navigate(['']);
  }

  newBook(): void {
    this.submitted = false;
    this.gotoList();
  }
}
