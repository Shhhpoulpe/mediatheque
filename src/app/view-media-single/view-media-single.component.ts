import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-media-single',
  templateUrl: './view-media-single.component.html',
  styleUrls: ['./view-media-single.component.scss']
})
export class ViewMediaSingleComponent implements OnInit,OnDestroy {

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
  ]
  
  id: number;
  private sub: any;
  media;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.media = this.medias[this.id];
  })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
