import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class BaseApiService {

    constructor(private http: HttpClient, private baseUrl: string, private requiredParams: {[s: string]: string}) { }

    private getRequestUrl(endpoint: string, parameters: {[s: string]: string}): string {
        const requestUrl = new URL(endpoint, this.baseUrl);
        return requestUrl.href;
    }

    private getRequestParameters(parameters: {[s: string]: string}): {[s: string]: string} {
        return {...parameters, ...this.requiredParams};
    }

    protected makeGetRequest<T>(endpoint: string, parameters: {[s: string]: string}): Observable<T> {
        const requestUrl = this.getRequestUrl(endpoint, parameters);
        const requestParams = this.getRequestParameters(parameters);
        return this.http.get<T>(requestUrl, {params: requestParams});
    }
}
