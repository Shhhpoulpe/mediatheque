import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-media',
  templateUrl: './view-media.component.html',
  styleUrls: ['./view-media.component.scss']
})
export class ViewMediaComponent implements OnInit {

  medias = [
    {
      id: '0',
      titre: 'ça',
      type: 'livre',
      genre: 'horreur',
      resume: 'Un clown tueur se balade en ville',
      image: 'ca.png'
    },
    {
      id: '1',
      titre: 'La tour monparnasse infernal',
      type: 'film',
      genre: 'comedie',
      resume: 'Deux idiots doivent sauver la tour Monparnasse',
      image: 'monparnasse.png'
    },
    {
      id: '2',
      titre: 'Kung Fury',
      type: 'film',
      genre: 'action/comedie',
      resume: 'Un flic pro du kung fu doit arreter le Kung Fürher',
      image: 'Kung Fury.png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
