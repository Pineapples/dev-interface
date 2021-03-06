import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ngapimock-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isCollapsed: boolean;

    /** {@inheritDoc}. */
    ngOnInit() {
        this.isCollapsed = true;
    }

}
