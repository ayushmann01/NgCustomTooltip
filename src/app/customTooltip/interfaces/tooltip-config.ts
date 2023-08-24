import { Type } from '@angular/core';

export type PositionOptions = 'left' | 'right' | 'top' | 'bottom';


export interface TooltipConfig<T> {
  component: Type<T>;

  inputData: Partial<T>;

  position: PositionOptions;
}


