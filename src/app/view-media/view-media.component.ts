import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-media',
  templateUrl: './view-media.component.html',
  styleUrls: ['./view-media.component.scss']
})
export class ViewMediaComponent implements OnInit {

  medias = [
    {
      id: 0,
      titre: 'ça',
      type: 'livre',
      genre: 'horreur',
      resume: 'Un clown tueur se balade en ville',
      image: 'ca.png'
    },
    {
      id: 1,
      titre: 'La tour monparnasse infernal',
      type: 'film',
      genre: 'comedie',
      resume: 'Deux idiots doivent sauver la tour Monparnasse',
      image: 'monparnasse.png'
    },
    {
      id: 2,
      titre: 'Kung Fury',
      type: 'film',
      genre: 'action/comedie',
      resume: 'Un flic pro du kung fu doit arreter le Kung Fürher',
      image: 'Kung Fury.png'
    },
    {
      id: 3,
      titre: 'Le Parrain',
      type: 'film',
      genre: 'Policier/Drame',
      resume: 'Un parrain qui tente de tuer Don Vito',
      image: 'LeParrain.jpg'
    },
    {
      id: 4,
      titre: 'Les évadés',
      type: 'film',
      genre: 'Drame',
      resume: "Deux gars qui veulent s'évader",
      image: 'Evadee.jpg'
    },
    {
      id: 5,
      titre: 'YourName',
      type: 'film',
      genre: 'Animation/Fantastique',
      resume: "Deux jeunes ado qui échangent leurs corps",
      image: 'YourName.jpg'
    },
    {
      id: 6,
      titre: 'The Dark Knight',
      type: 'film',
      genre: 'Action/Thriller',
      resume: "Batman contre Joker dans Gotham",
      image: 'Batman.jpg'
    },
    {
      id: 7,
      titre: 'Pulp Fiction',
      type: 'film',
      genre: 'Policier/Thriller',
      resume: "Il y a quelques malformation génétiques chez certaines demoiselles",
      image: 'PulpFiction.jpg'
    },
    {
      id: 8,
      titre: 'La Ligne Verte',
      type: 'film',
      genre: 'Policier/Fantastique',
      resume: "John Cafe qui nous fait un bon café ( et de bon miracles )",
      image: 'LigneVerte.jpg'
    },
    {
      id: 9,
      titre: 'Forest Gump',
      type: 'film',
      genre: 'Romance/Drame/Comédie',
      resume: "Un homme qui passa sa vie à courrir et qui créea le Smiley",
      image: 'Forest.jpg'
    },
    {
      id: 10,
      titre: 'Le roi Lion',
      type: 'film',
      genre: 'Animation',
      resume: "Le film comprennant mufassa, traumatisant une partie des milléniales dès leurs plus jeune âge",
      image: 'Lion.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
