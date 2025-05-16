import {FlyonuiColors, FlyonuiSizes} from 'ngx-flyonui';
import {cva} from 'class-variance-authority';

export interface FuiBaseButtonColors extends FlyonuiColors {}
export interface FuiBaseButtonStyles {
  soft: string;
  outline: string;
  dashed: string;
  gradient: string;
}
export interface FuiBaseModifiers {
  glass: string;
  wide: string;
  block: string;
  circle: string;
  square: string;
  text: string;
}
export interface FuiBaseButtonStates {
  active: string;
  disabled: string;
}

export interface FuiBaseButtonSizes extends Pick<FlyonuiSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'responsive'> {}

export const fuiBaseButtonVariants = cva(
  'btn',
  {
    variants: {
      fuiColor: {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "accent": "btn-accent",
        "neutral": "",
        "info": "btn-info",
        "success": "btn-success",
        "warning": "btn-warning",
        "error": "btn-error"
      },
      fuiStyle: {
        "soft": "btn-soft",
        "outline": "btn-outline",
        "dashed": "btn-outline border-dashed",
        "gradient": "btn-gradient"
      },
      fuiModifier: {
        "glass": "glass",
        "wide": "btn-wide",
        "block": "btn-block",
        "circle": "btn-circle",
        "square": "btn-square",
        "text": "btn-text",
      },
      fuiState: {
        "active": "btn-active",
        "disabled": "btn-disabled"
      },
      fuiSize: {
        "responsive": "btn-sm md:btn-md lg:btn-lg",
        "xs": "btn-xs",
        "sm": "btn-sm",
        "md": "",
        "lg": "btn-lg",
        "xl": "btn-xl"
      },
      fuiRounded: {
        true: "rounded-full"
      }
    }
  }
);
