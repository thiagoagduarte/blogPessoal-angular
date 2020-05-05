import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  // CRUD - CREATE(POST) READ(GET) UPDATE(PUT) E DELETE(DELETE)

  // END POINT - DECLARAR NO SERVICE TODOS OS PONTOS DE CONTATO COM O SERVIDOR UTILIZANDO CRUD

  // INICIO DAS OPERAÇÕES

  // READ
  getAllPostagens() {
    return this.http.get('http://31.220.57.14:8080/postagens')
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://31.220.57.14:8080/postagens', postagem)
  }

  putPostagem(postagem: Postagem) {
    return this.http.put('http://31.220.57.14:8080/postagens', postagem)
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://31.220.57.14:8080/postagens/${id}`)
  }

}
