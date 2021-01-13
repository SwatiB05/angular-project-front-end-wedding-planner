import { Cities } from './city.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl='http://localhost:8080/admin/cities'

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  city:Cities

  getCities():Observable<any>{
    return this.http.get<Cities[]>(baseUrl)
  }

updateCity(c:Cities):Observable<Object>{
  return this.http.put(`${baseUrl}/${c.cityId}`,c,{responseType: 'text'})
}

createCity(c:Cities){
  return this.http.post<Cities>(`${baseUrl}/create`,c,{ responseType: 'text' as 'json'  })
}

deleteCity(id:number){
  return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' })
}

}
