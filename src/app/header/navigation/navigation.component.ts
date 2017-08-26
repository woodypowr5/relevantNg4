import { Component, OnInit } from '@angular/core';
import { NavlinkComponent} from './navlink/navlink.component';
import { Link } from '../../models/link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  links: Link[] = [
    {
      name: 'homeLink',
      displayName: 'Home',
      href: '#'
    },
    {
      name: 'aboutLink',
      displayName: 'About',
      href: '#'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
