import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from './components/menu/menu';
import { Home } from './components/home/home';
import { AboutMe } from './components/about-me/about-me';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'portfolio-root',
  standalone: true,
  imports: [CommonModule, Menu, Home, AboutMe, Projects, Contact],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  readonly menuOptions = ['Início', 'Sobre Mim', 'Projetos', 'Contato'];
  selectedOption = signal<string>(this.menuOptions[0]);

  onMenuChange(option: string): void {
    this.selectedOption.set(option);
  }
}