import { Injectable } from '@angular/core';
import { Despesa } from './despesa';

/*LocalStorage Serviço*/
import { LocalStorageService } from 'angular-2-local-storage'

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private despesas: Despesa[];

  constructor(private lss: LocalStorageService) { }

  getDb() {
    this.despesas = []
    if (this.lss.get("despesas") != null) {
      this.despesas = JSON.parse(<string>this.lss.get("despesas"));
    }
  }

  public getAll(): Despesa[] {
  //   this.despesas = [
  //   new Despesa(1, "Mercado", "Extra", new Date("2018-05-06T12:00:00Z"), 280.90),
  //   new Despesa(2, "Lazer", "Cinema", new Date("2018-05-10T12:00:00Z"), 100.50),
  // ];

    this.getDb();
    return this.despesas;
  }

  public save(despesa: Despesa) {
    this.getDb();
    this.despesas.push(despesa);
    this.lss.set("despesas", JSON.stringify(this.despesas));
  }

  public delete(despesa: Despesa) {
    this.getDb();
    this.despesas.splice(this.despesas.indexOf(despesa), 1);
    this.lss.set("despesas", JSON.stringify(this.despesas));
  }
}
