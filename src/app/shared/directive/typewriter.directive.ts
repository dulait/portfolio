import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  Renderer2,
  inject,
} from '@angular/core';

interface TypewriterConfig {
  typeSpeed: { min: number; max: number };
  deleteSpeed: { min: number; max: number };
  pauseAfterType: number;
  pauseAfterDelete: number;
  punctuationPause: Record<string, number>;
}

const DEFAULT_CONFIG: TypewriterConfig = {
  typeSpeed: { min: 40, max: 90 },
  deleteSpeed: { min: 15, max: 40 },
  pauseAfterType: 8000,
  pauseAfterDelete: 400,
  punctuationPause: { ',': 250, ';': 250, '.': 450 },
};

type Phase = 'typing' | 'waiting' | 'deleting' | 'done';

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

@Directive({
  selector: '[pfTypewriter]',
})
export class TypewriterDirective implements OnChanges, OnDestroy {
  @Input('pfTypewriter') text = '';
  @Output() deleted = new EventEmitter<void>();

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly config = DEFAULT_CONFIG;

  private visibleNode!: Text;
  private hiddenNode!: Text;
  private hiddenSpan!: HTMLSpanElement;
  private initialized = false;

  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private cursor = 0;
  private phase: Phase = 'typing';
  private wordSpeed = 0;

  ngOnChanges(): void {
    this.cancelScheduled();
    this.ensureDomNodes();
    this.reset();
    this.advance();
  }

  ngOnDestroy(): void {
    this.cancelScheduled();
  }

  private ensureDomNodes(): void {
    if (this.initialized) return;

    this.visibleNode = this.renderer.createText('');
    this.hiddenSpan = this.renderer.createElement('span');
    this.hiddenNode = this.renderer.createText('');

    this.renderer.setStyle(this.hiddenSpan, 'color', 'transparent');
    this.renderer.appendChild(this.hiddenSpan, this.hiddenNode);
    this.renderer.appendChild(this.el.nativeElement, this.visibleNode);
    this.renderer.appendChild(this.el.nativeElement, this.hiddenSpan);

    this.initialized = true;
  }

  private reset(): void {
    this.cursor = 0;
    this.phase = 'typing';
    this.wordSpeed = this.randomTypeSpeed();
    this.render();
  }

  private render(): void {
    this.visibleNode.textContent = this.text.slice(0, this.cursor);
    this.hiddenNode.textContent = this.text.slice(this.cursor);
  }

  private advance(): void {
    const handler = this.phaseHandlers[this.phase];
    handler.call(this);
  }

  private readonly phaseHandlers: Record<Phase, () => void> = {
    typing: () => this.handleTyping(),
    waiting: () => this.scheduleNext('deleting', this.config.pauseAfterType),
    deleting: () => this.handleDeleting(),
    done: () => this.deleted.emit(),
  };

  private handleTyping(): void {
    if (this.cursor >= this.text.length) {
      this.transition('waiting');
      return;
    }

    const char = this.text[this.cursor];
    this.cursor++;
    this.render();

    if (char === ' ') {
      this.wordSpeed = this.randomTypeSpeed();
    }

    const delay = this.config.punctuationPause[char] ?? this.wordSpeed;
    this.schedule(delay);
  }

  private handleDeleting(): void {
    if (this.cursor <= 0) {
      this.transition('done');
      return;
    }

    this.cursor--;
    this.render();
    this.schedule(this.randomDeleteSpeed());
  }

  private transition(next: Phase): void {
    this.phase = next;
    this.advance();
  }

  private scheduleNext(next: Phase, delay: number): void {
    this.phase = next;
    this.schedule(delay);
  }

  private schedule(delay: number): void {
    this.timeoutId = setTimeout(() => this.advance(), delay);
  }

  private cancelScheduled(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  private randomTypeSpeed(): number {
    return randomBetween(this.config.typeSpeed.min, this.config.typeSpeed.max);
  }

  private randomDeleteSpeed(): number {
    return randomBetween(this.config.deleteSpeed.min, this.config.deleteSpeed.max);
  }
}
