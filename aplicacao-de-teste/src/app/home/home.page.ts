import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private calendar: Calendar) { }

  public titulo: string = 'Meu Evento';
  public local: string = 'Local do Evento';
  public anotacao: string = 'Evento gerado automaticamente';
  public dataHoraSelecionada: string = new Date().toISOString();

  public adicionarEventoAoCalendario(titulo: string, local: string, anotacao: string, dataInicio: Date, dataFim: Date) {
    this.calendar.createEventInteractively(titulo, local, anotacao, dataInicio, dataFim)
      .then(() => console.log('Evento adicionado com sucesso ao calendário'))
      .catch(error => console.error('Erro ao adicionar evento ao calendário', error));
  }

  public adicionarEvento() {
    this.adicionarEventoAoCalendario(this.titulo, this.local, this.anotacao, new Date(this.dataHoraSelecionada), this.adicionarUmaHora(this.dataHoraSelecionada));
  }

  public adicionarUmaHora(dateTimeStr: string): Date {
    let dataTime = new Date(dateTimeStr);
    dataTime.setHours(dataTime.getHours() + 1);
    return dataTime;
  }
}
