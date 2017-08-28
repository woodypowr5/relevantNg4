import { Injectable } from '@angular/core';
import { Link } from '../../models/link.model';
import { NAVLINKS } from '../../data/navlinks.data';

@Injectable()
export class NavlinksService {

    getNavlinks(): Link[] {
        return NAVLINKS;
    }
}