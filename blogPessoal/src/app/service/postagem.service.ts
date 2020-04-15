import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  // CRUD - CREATE READ UPDATE E DELETE

  // END POINT - DECLARAR NO SERVICE TODOS OS PONTOS DE CONTATO COM O SERVIDOR UTILIZANDO CRUD

  // INICIO DAS OPERAÇÕES

  // READ
  getAllPostagens() {
    return this.http.get('http://31.220.57.14:8080/postagens')
  }

}
