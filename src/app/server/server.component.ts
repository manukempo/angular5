import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
  // encapsulation: ViewEncapsulation.None //Native & Emulated (default)
})
export class ServerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') server: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(){
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }

}
