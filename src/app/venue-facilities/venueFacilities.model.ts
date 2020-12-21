import { Facilities } from './../facility/facility.model';
// {
    //             "venueFacilityId": 1,
    //             "facilityId": {
    //                 "facilityId": 1,
    //                 "facilityName": "parking"
    //             },
    //             "charges": 12000.0
    //         }

    export class VenueFacilities{
        constructor(public venueFacilityId:number,public facilityId:Facilities,public charges:number){}
    }