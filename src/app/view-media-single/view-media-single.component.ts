import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-media-single',
  templateUrl: './view-media-single.component.html',
  styleUrls: ['./view-media-single.component.scss']
})
export class ViewMediaSingleComponent implements OnInit,OnDestroy {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
  })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
