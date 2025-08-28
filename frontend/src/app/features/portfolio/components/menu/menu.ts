import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  @Input() options: string[] = [];
  @Input() activeOption: string = '';
  @Output() changeOption = new EventEmitter<string>();

  handleChangeOption(option: string): void {
    this.changeOption.emit(option);
  }

  getOptionClasses(option: string): string {
    if (option === this.activeOption) {
      return 'menu_option_button active';
    }
    return 'menu_option_button';
  }
}
