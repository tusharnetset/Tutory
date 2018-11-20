import { Directive,Input } from '@angular/core';

/**
 * Generated class for the LimitToDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[limit-to]',
  host: {
    '(keypress)': '_onKeypress($event)',
  }
})
export class LimitToDirective {
  @Input('limit-to') limitTo; 
  _onKeypress(e) {
     const limit = +this.limitTo;
     if (e.target.value.length === limit) e.preventDefault();
  }
}