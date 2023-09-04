import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Book } from '../pojo/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];

  public constructor(private homeService: HomeService) { }


  ngOnInit(): void {
    this.homeService.getAllBooks().subscribe((res: any) => {
      console.warn(res);
      this.books = res;
    });
  }

}
