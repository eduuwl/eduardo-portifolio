import "react";

// Permite CSS custom properties em `style`, ex.: style={{ "--reveal-delay": "80ms" }}
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
