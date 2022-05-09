import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  AfterViewInit,
  ElementRef,
  OnDestroy,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'yt-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Output() readonly stateChange = new EventEmitter<any>();
  @Output() readonly videoLoaded = new EventEmitter<any>();
  @Input() videoId?: string;
  @Input() startSeconds? = 1;
  @Input() width?: number;
  @Input() height = 170;
  @Input() playerVars?: any = {
    showinfo: 0,
    modestbranding: 0,
  };
  public isIframLoaded!: boolean;

  private playerRef?: any;

  private readonly onDestroy$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {}

  public ngOnInit(): void {
    this.loadIframScript();
    this.listenToWindowResize();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public ngAfterViewInit(): void {
    this.setVideoDimensions();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const videoIdChange = changes['videoId'];
    const startSecondsChange = changes['startSeconds'];
    if (videoIdChange && !videoIdChange.isFirstChange) {
      this.player?.loadVideoById(videoIdChange.currentValue, 1);
    }
    if (startSecondsChange && startSecondsChange.currentValue) {
      this.player?.seekTo(startSecondsChange.currentValue || 1, true);
      console.log('startSecondsChange', startSecondsChange);
    }
  }

  public onReady(event: any): void {
    this.playerRef = event.target;
    this.stateChange.next(this.playerRef.getPlayerState());
    this.videoLoaded.next(this.playerRef);
    event.target.playVideo();
    console.log('onReady');
  }

  public onStateChange(event: any): void {
    if (event.data === '') {
      console.log('CUE');
      this.playerRef?.playVideo();
      this.playerRef?.seekTo(this.startSeconds || 1, true);
      this.videoLoaded.next(this.playerRef!);
    }
    this.stateChange.next(event.data);
  }

  public get player(): any | undefined {
    return this.playerRef;
  }

  private loadIframScript(): void {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      this.isIframLoaded = true;
      this.cdr.detectChanges();
    });
  }

  private listenToWindowResize(): void {
    fromEvent(window, 'resize')
      .pipe(debounceTime(200), takeUntil(this.onDestroy$))
      .subscribe(() => this.setVideoDimensions());
  }

  private setVideoDimensions(): void {
    const el = this.element.nativeElement.parentElement;
    this.width = el.clientWidth;
    this.height = el.clientHeight;
    this.cdr.detectChanges();
  }
}
