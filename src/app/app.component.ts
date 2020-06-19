import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mediatheque3';

  medias = [
    {
      titre: 'ça',
      type: 'livre',
      genre: 'horreur',
      resume: 'Un clown tueur se balade en ville',
      image: 'ca.png'
    },
    {
      titre: 'La tour monparnasse infernal',
      type: 'film',
      genre: 'comedie',
      resume: 'Deux idiots doivent sauver la tour Monparnasse',
      image: 'monparnasse.png'
    },
    {
      titre: 'Kung Fury',
      type: 'film',
      genre: 'action/comedie',
      resume: 'Un flic pro du kung fu doit arreter le Kung Fürher',
      image: 'Kung Fury.png'
    },
  ]
}
