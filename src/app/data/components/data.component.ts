import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    templateUrl: './app/data/components/data.html'
})
export class DataComponent implements OnInit {
    ngOnInit() {
    	this.endpoint = JSON.stringify({
		    "buttons": [
		        10,
		        38,
		        -13,
		        -18
		    ],
		    "bars": [
		        62,
		        45,
		        62
		    ],
		    "limit": 230
		});
    }
}