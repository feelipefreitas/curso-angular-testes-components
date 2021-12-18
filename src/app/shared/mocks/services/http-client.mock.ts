import { Observable, of } from "rxjs";

export class HttpClientMock {
    get(): Observable<any> {
        return of([]);
    }
}