import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {
  cepData: any;
  cep: any;

  constructor(protected apiService: HttpServiceService) { }

  ngOnInit() {
  }

  getCepData(cep: string) {
    this.apiService.get(cep).subscribe({
      next: (data) => {
        this.cepData = data;
        console.log(this.cepData);
      },
      error: (error) => {
        console.error('Error fetching CEP data:', error);
      }
    });
  }

}
