// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: Map<string, string>;

  constructor() {
    this.users = new Map<string, string>();
  }

  register(email: string, password: string): boolean {
    if (this.users.has(email)) {
      return false; // Usuário já existe
    } else {
      this.users.set(email, password);
      return true; // Registro bem-sucedido
    }
  }

  login(email: string, password: string): boolean {
    const storedPassword = this.users.get(email);
    return storedPassword === password;
  }
}
