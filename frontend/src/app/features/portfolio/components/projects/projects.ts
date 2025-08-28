import { Component, signal } from '@angular/core';

interface GithubUrls {
  url: string,
  name: string,
  icon: string,
  iconClass?: boolean
}

interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrls?: GithubUrls[]; 
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
 projects = signal<Project[]>([
    {
      name: 'Jogo de Xadrez',
      description: 'Meu primeiro projeto. Desenvolvido com JavaScript puro para explorar lógica e manipulação do DOM. Um desafio complexo que me ensinou a enfrentar problemas de frente, mesmo no início da jornada.',
      techStack: ['JavaScript (Vanilla)', 'HTML5', 'CSS3'],
      githubUrls: [{url: 'https://github.com/Hen05/Chess', name: 'Chess', icon: 'assets/github.svg'}]
    },
    {
      name: 'Sistema de Clubes',
      description: 'Aplicação para gestão de bebidas em clubes, controlando com precisão a entrada, saída e o estoque de itens pertencentes aos membros, garantindo um serviço exclusivo e organizado.',
      techStack: ['React', 'Next.js', 'MongoDB', 'Node.js'],
      githubUrls: [
        {url: 'https://github.com/Hen05/club-system', name: 'Sistema de Clubes', icon: 'assets/github.svg'}
      ]
    },
    {
      name: 'IDIMESPE Editora (Privado)',
      description: 'Plataforma completa para uma editora acadêmica, gerenciando todo o fluxo de submissão, revisão e publicação de artigos científicos, com formulários dinâmicos e painéis de controle.',
      techStack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
      githubUrls: [
        {url: 'https://juscogens.com.br/home', name: 'Juscogens', 'icon': 'assets/juscogens.svg', iconClass: true}
      ]
    },
    {
      name: 'Microsserviço de Imagens com IA (Privado)',
      description: 'Projeto universitário de um microsserviço orientado a eventos para processamento de imagens com IA. A arquitetura incluía filas para gerenciar roles e garantir escalabilidade.',
      techStack: ['TypeScript', 'Python', 'Docker'],
    },
    {
      name: 'MongoSQL Test Framework (Privado)',
      description: 'Framework universitário para análise de cobertura de testes em APIs. A ferramenta analisava endpoints e gerava relatórios de quanto da API estava coberto por testes automatizados.',
      techStack: ['TypeScript', 'Jest', 'Playwright', 'Node.js'],
    }
  ]);
}