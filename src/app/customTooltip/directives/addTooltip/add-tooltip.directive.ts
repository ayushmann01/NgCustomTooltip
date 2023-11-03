import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { TooltipComponent } from 'src/app/partials/tooltip/tooltip.component';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({
  selector: '[tooltip]',
})
export class AddTooltipDirective implements OnInit {
  @Input('tooltip') text: string = '';

  private overlayRef!: OverlayRef;

  // To dyanmically apply tooltip component
  // @Input() tooltipConfigs!: Tooltip;
  // toolTipComponent = this.tooltipConfigs?.component
  //   ? this.tooltipConfigs.component
  //   : TooltipComponent;

  constructor(
    private elementRef: ElementRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private overlay: Overlay
  ) {}
  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      // Create position attached to the elementRef
      .flexibleConnectedTo(this.elementRef)
      // Describe how to connect overlay to the elementRef
      // Means, attach overlay's center bottom point to the
      // top center point of the elementRef.
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8,
        },
      ]);
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    const tooltipPortal = new ComponentPortal(TooltipComponent);

    // Attach tooltip portal to overlay
    const tooltipRef: ComponentRef<TooltipComponent> =
      this.overlayRef.attach(tooltipPortal);
    // Pass content to tooltip component instance
    tooltipRef.instance.text = this.text;

    console.log('elementRef', this.elementRef);
    console.log('overlayRef', this.overlayRef);

    console.log('tooltip', tooltipRef, this.text);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
    this.overlayRef.dispose();
  }

  destroy(): void {
    this.overlayRef.detach();
    // this.overlayRef.dispose();
  }
}
