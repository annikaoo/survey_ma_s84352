import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { isDevMode } from "@angular/core";
import { take } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoggingService {
  public startTime = 0;
  public endTime = 0;
  public datumZeit = 0;

  constructor(public http: HttpClient) {}

  sendData(
    data: any //später Datenmodel verschicken
  ) {
    this.endTime = new Date().getTime();  //End time

    const bearbeitungszeit = this.endTime - this.startTime;
    const timestamp = this.datumZeit;
    console.log("Datum:", timestamp);

    const storage: any = {};

    const test = {
      ...data,
      ...storage,
      diagramOrder1: localStorage.getItem('filePaths'),
      //diagramOrder2: localStorage.getItem('diagramOrder2'),
      bearbeitungszeit :  this.millisToMinutesAndSeconds(bearbeitungszeit),
      timestamp: this.datumZeit,


    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ae12bc42'
    });
    console.log('data:', data );
    console.log('test:', test);
    /*const url = isDevMode()
      ? 'http://localhost:3000/log/chrissy-ma'  //eigene URL?
      : 'http://itv21.informatik.htw-dresden.de:3000/log/chrissy-ma';
    this.http
      .post(url, test , { headers: headers }) // +test
      .pipe(take(1))
      .subscribe({
        complete: () => { console.log('Logging Success'); },
        error: (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
              console.log('Client-side error occured.');
          } else {
              console.log('Server-side error occured.');
              console.log(err.error);
          }
        }
      });*/
  }

   millisToMinutesAndSeconds(millis: number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  setStartTime(){
    this.startTime = new Date().getTime();  // Start time
  }

  makeDate(){
let jetzt = Date.now() ;

let datum  =  new Date(jetzt);

this.datumZeit = Date.now(); // `${datum}`;

  }

}