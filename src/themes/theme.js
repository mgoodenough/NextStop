import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  "global": {
    "colors": {
      "icon": {
        "0": "#",
        "1": "6",
        "2": "6",
        "3": "6",
        "4": "6",
        "5": "6",
        "6": "6",
        "dark": "#f8f8f8",
        "light": "#666666"
      },
      "active": "rgba(221,221,221,0.5)",
      "black": "#000000",
      "border": {
        "dark": "rgba(255,255,255,0.33)",
        "light": "rgba(0,0,0,0.33)"
      },
      "brand": "#0097d0",
      "control": {
        "dark": "accent-1",
        "light": "brand"
      },
      "focus": "#82ccfd",
      "placeholder": "#AAAAAA",
      "selected": "#0097d0",
      "text": {
        "dark": "#f8f8f8",
        "light": "#444444"
      },
      "white": "#FFFFFF",
      "accent-1": "#82ccfd",
      "accent-2": "#FD6FFF",
      "accent-3": "#81FCED",
      "accent-4": "#FFCA58",
      "dark-1": "#333333",
      "dark-2": "#555555",
      "dark-3": "#777777",
      "dark-4": "#999999",
      "dark-5": "#999999",
      "dark-6": "#999999",
      "light-1": "#F8F8F8",
      "light-2": "#F2F2F2",
      "light-3": "#EDEDED",
      "light-4": "#DADADA",
      "light-5": "#DADADA",
      "light-6": "#DADADA",
      "neutral-1": "#00873D",
      "neutral-2": "#3D138D",
      "neutral-3": "#00739D",
      "neutral-4": "#A2423D",
      "status-critical": "#FF4040",
      "status-error": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "background": "#ffffff"
    }
  }
});

export default theme;