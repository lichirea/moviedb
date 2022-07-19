import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';

  constructor(
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute =
      function () {
        return false;
      }
  }

  ngOnInit(): void {
  }

  watchlist() {
    this.router.navigate(['watchlist']);
  }

  search() {
    this.searchTerm = this.searchTerm.trim().replace(/\s/g, '-');
    console.log(this.searchTerm);
    this.router.navigate([`search/${this.searchTerm}`]);
  }

  formTest() {
    this.router.navigate(['form-test']);
  }
}
