import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.css']
})

export class NavlinkComponent implements OnInit {
  @Input() link: {
    name: string,
    displayName: string,
    href: string
  }

  constructor() { }

  ngOnInit() {
  }

}
