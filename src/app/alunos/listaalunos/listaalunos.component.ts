import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/core/model';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {

  alunos: Aluno [] = [
    {id: 1, nomealuno: "Matheus"},
    {id: 2, nomealuno: "Graziela"},
    {id: 3, nomealuno: "Daniel"},
    {id: 4, nomealuno: "Derek"},
    {id: 5, nomealuno: "Victor"},
    {id: 6, nomealuno: "Francis"},
    {id: 7, nomealuno: "Karina"}

  ]
  displayedColumns = ['id', 'nomealuno']

  constructor() { }

  ngOnInit(): void {
  }

}
