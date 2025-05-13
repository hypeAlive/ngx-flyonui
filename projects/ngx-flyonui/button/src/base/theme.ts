import {FlyonuiColors} from 'ngx-flyonui';
import {cva} from 'class-variance-authority';

export interface FlyonuiBaseButtonColors extends FlyonuiColors {}
export interface FlyonuiBaseButtonStyles {
  soft: string;
  outline: string;
  dashed: string;
  gradient: string;
}
export interface FlyonuiBaseModifiers {
  glass: string;
  wide: string;
  block: string;
  circle: string;
  square: string;
  text: string;
}
export interface FlyonuiBaseButtonStates {
  active: string;
  disabled: string;
}

export const flyonuiBaseButtonVariants = cva(
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
      }
    }
  }
);
