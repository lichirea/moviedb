import {Component, OnInit} from '@angular/core';
import {AdItem} from "../entities/aditem";
import {JokeComponent} from "../entities/joke.component";

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  ads: AdItem[] = [
    new AdItem(JokeComponent, {msg: 'Radem la 3, da?'}),
    new AdItem(JokeComponent, {msg: '1'}),
    new AdItem(JokeComponent, {msg: '2'}),
    new AdItem(JokeComponent, {msg: '4'}),
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
