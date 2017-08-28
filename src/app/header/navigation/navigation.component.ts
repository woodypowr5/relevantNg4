import { Component, OnInit } from '@angular/core';
import { NavlinkComponent} from './navlink/navlink.component';
import { NavlinksService } from '../../shared/services/navlinks.service';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [NavlinksService]
})
export class NavigationComponent implements OnInit {
  navlinks: Link[] = this.navlinksService.getNavlinks();
  constructor (private navlinksService: NavlinksService) { }

  ngOnInit() {
  }

}
