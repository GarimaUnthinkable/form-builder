import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ServerService {
  constructor(private http: HttpClient) {}

  postUser(formData: any) {
    return this.http.post<any>("http://localhost:4000/forms", formData).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getUser() {
    return this.http.get<any>("http://localhost:4000/forms").pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateUser(formData: any, id: number) {
    return this.http.patch<any>("http://localhost:4000/forms/" + id, formData).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
