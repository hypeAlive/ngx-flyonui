import {FlyonuiColors} from 'ngx-flyonui';
import {cva} from 'class-variance-authority';

export interface FlyonuiBaseButtonColors extends FlyonuiColors {}

export const flyonuiBaseButtonVariants = cva(
  'btn',
  {
    variants: {
      color: {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "accent": "btn-accent",
        "neutral": "btn-neutral",
        "info": "btn-info",
        "success": "btn-success",
        "warning": "btn-warning",
        "error": "btn-error"
      }
    }
  }
);
