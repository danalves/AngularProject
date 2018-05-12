import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router'

/*Serviços*/
import { DespesaService } from '../despesa.service'

/*Classes*/
import { Despesa } from '../despesa'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  despesas: Despesa[] = new Array;

  constructor(private despesaService: DespesaService,
              private router: Router) { }

  ngOnInit() {
    this.despesas = this.despesaService.getAll()
  }

  add(): void {
    this.router.navigate(['/add'])
  }

  delete(despesa: Despesa) {
    this.despesaService.delete(despesa)
    this.despesas = this.despesaService.getAll()
  }

}
