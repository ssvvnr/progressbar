import {Injectable} from "@angular/core";
import {Bar} from "../models/bar";

@Injectable()
export class EndPointService {

    private endpoints =  {
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
    };

    getEndPoint() {
        return this.endpoints;
    }

}