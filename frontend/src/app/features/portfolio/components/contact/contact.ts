import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private snackBar = inject(MatSnackBar);

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  isSending = false;
  isSent = false;
  error: string | null = null;

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.isSent = false;
    this.error = null;

    const serviceId = 'service_ckm1e7f';
    const templateId = 'template_jbcieko';
    const publicKey = 'WPEAVK2SOcUbn1_JU';

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      this.isSent = true;
      this.contactForm.reset();    
      this.abrirSnackbar('Mensagem enviada com sucesso!', 'Fechar');

    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      this.error = 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.';
      this.abrirSnackbar(this.error, 'Fechar', 'snackbar-erro');

    } finally {
      this.isSending = false;
    }
  }

  // 6. Crie uma função helper para configurar e abrir o Snackbar
  abrirSnackbar(message: string, action: string, panelClass: string = 'snackbar-sucesso') {
    this.snackBar.open(message, action, {
      duration: 5000, // Duração em milissegundos (5 segundos)
      horizontalPosition: 'right', // Posição horizontal ('start', 'center', 'end', 'left', 'right')
      verticalPosition: 'top', // Posição vertical ('top', 'bottom')
      panelClass: [panelClass] // Classe CSS para estilização customizada
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}