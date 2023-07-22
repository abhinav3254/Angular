import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // getting the value from the dynamic route
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    // get(id) --> here id because we have mentioned it in routing that user:/id
    console.warn("User id is :- " + this.route.snapshot.paramMap.get('id'));
  }
}
