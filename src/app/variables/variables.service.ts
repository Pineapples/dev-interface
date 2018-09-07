import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {VariableRequest} from './variable-request';
import {Observable} from 'rxjs';

/** Variables service. */
@Injectable()
export class VariablesService {
    private BASE_URL = '/ngapimock';

    /**
     * Constructor.
     * @param {HttpClient} http The http client.
     */
    constructor(private http: HttpClient) {
    }

    /**
     * Deletes the variable.
     * @param {string} key The key.
     * @return {Observable<Object>} observable The observable.
     */
    deleteVariable(key: string) {
        return this.http.delete(`${this.BASE_URL}/variables/${key}`);
    }

    /**
     * Gets the variables.
     * @return {Observable<Object>} observable The observable.
     */
    getVariables(): Observable<any> {
        return this.http.get(`${this.BASE_URL}/variables`);
    }

    /**
     * Updates the mock.
     * @param {VariableRequest} request The request.
     * @return {Observable<Object>} observable The observable.
     */
    updateVariable(request: VariableRequest) {
        return this.http.put(`${this.BASE_URL}/variables`, request.payload);
    }
}
