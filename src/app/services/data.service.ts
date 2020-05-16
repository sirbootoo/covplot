import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private TRACK_THE_VIRUS_API = "https://dev.api.covid19.nguy.dev/?q=p2";
  private TRACK_THE_VIRUS_API_2 = "https://dev.api.covid19.nguy.dev/?q=p1";

  private covid_tracker_url = "https://coronavirus-tracker-api.herokuapp.com/"

  constructor(private httpClient: HttpClient) {

  }

  public sendGetRequest(which){
    return this.httpClient.get(this.covid_tracker_url + which);
  }

}
