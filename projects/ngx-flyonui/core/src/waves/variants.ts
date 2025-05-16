import {FlyonuiColors} from '../core/flyonui.colors';
import {cva} from 'class-variance-authority';

export interface FuiWavesColors extends FlyonuiColors {
  light: string;
}

export const fuiWavesVariants = cva(
  "waves",
  {
    variants: {
      fuiColor: {
        "primary": "waves-primary",
        "secondary": "waves-secondary",
        "accent": "waves-accent",
        "neutral": "",
        "info": "waves-info",
        "success": "waves-success",
        "warning": "waves-warning",
        "error": "waves-error",
        "light": "waves-light",
      }
    }
  }
);
