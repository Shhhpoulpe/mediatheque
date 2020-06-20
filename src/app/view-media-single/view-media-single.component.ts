import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-media-single',
  templateUrl: './view-media-single.component.html',
  styleUrls: ['./view-media-single.component.scss']
})
export class ViewMediaSingleComponent implements OnInit {

  @Input() id: string;
  @Input() test: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.id=data.id;
  })
  }

}
