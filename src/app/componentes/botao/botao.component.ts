import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Input() textoBotao: string = 'LOGIN';
  @Input() tamanhoBotao: string = 'auto';

  constructor() { }

  ngOnInit() {
  }

}
