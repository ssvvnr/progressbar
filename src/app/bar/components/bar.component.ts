import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Bar} from "../models/bar";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {EndPointService} from "../services/bar-service";

@Component({
    styleUrls: ['./app/bar/components/bar.css'],
    templateUrl: './app/bar/components/bar.html',
    providers: [EndPointService]
})
export class ProgressBarComponent {

	private endpoint:any = [];
	private bars:any = {};
	private buttons:any = {};
	private limit:Number = 0;
	private idIncrement:Number = 0;


    constructor(private _endPointService:EndPointService) {
        // this.bars = _endPointService.getEndPoint();
    }
 	ngOnInit() {
 		this.endpoint = this._endPointService.getEndPoint();

 		this.bars = this.endpoint.bars;
 		this.buttons = this.endpoint.buttons;
 		this.limit = this.endpoint.limit;

        console.log("Progress bar initialized with " + this.bars.length + " bars.");
    }

    public changeValue(e: any) {
	    console.log(e.currentTarget.id);
	    let id = e.currentTarget.id;
	    let value = e.currentTarget.value;
	  	let barId = document.getElementById("progressSelect").value;
	  	let progressBar = document.getElementById(barId);
		progressBar.value += Number(value);

		if (progressBar.value > 100) {
			progressBar.className = 'danger';
		} else {
			progressBar.className = '';
		}
    }
}
