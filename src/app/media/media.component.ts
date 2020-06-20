import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  @Input() id: Int8Array;
  @Input() titre: string;
  @Input() type: string;
  @Input() genre: string;
  @Input() resume: string;
  @Input() image: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  test(): void{
    alert("test")
  }

}
