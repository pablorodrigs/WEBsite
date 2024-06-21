import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  @Input() btnText!: string;
  imcResult: number | undefined;
  nome: string | undefined;
  idade: number | undefined;
  peso: number | undefined;
  altura: number | undefined;
  pesoCategoria: string | undefined;
  mostrarResposta: boolean = false; // Adiciona a variável mostrarResposta e inicializa como false

  onSubmit(form: any) {
    // Obter os valores dos campos do formulário
    this.nome = form.value.nome;
    this.idade = form.value.idade;
    this.peso = parseFloat(form.value.peso.replace(',', '.'));
    this.altura = parseFloat(form.value.altura.replace(',', '.'));

    // Verificar se nome e idade estão preenchidos
    if (!this.nome || !this.idade) {
      console.error('Nome ou idade não foram preenchidos.');
      return;
    }

    // Calcular o IMC
    if (this.altura !== 0) {
      this.imcResult = this.peso / (this.altura * this.altura);
      // Determinar a categoria de peso com base no IMC
      this.determinarCategoriaPeso();

      // Define mostrarResposta como true após o cálculo do IMC
      this.mostrarResposta = true;
    } else {
      console.error('A altura não pode ser zero.');
    }
  }

  determinarCategoriaPeso() {
    if (this.imcResult! < 18.5) {
      this.pesoCategoria = 'Abaixo do peso';
    } else if (this.imcResult! < 25) {
      this.pesoCategoria = 'Peso normal';
    } else if (this.imcResult! < 30) {
      this.pesoCategoria = 'Sobrepeso';
    } else if (this.imcResult! < 35) {
      this.pesoCategoria = 'Obesidade grau I';
    } else if (this.imcResult! < 40) {
      this.pesoCategoria = 'Obesidade grau II (severa)';
    } else {
      this.pesoCategoria = 'Obesidade grau III (mórbida)';
    }
  }
}