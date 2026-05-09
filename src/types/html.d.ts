import * as React from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        marquee: React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & { width?: string | number },
          HTMLElement
        >;
        font: React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & { color?: string; size?: string | number },
          HTMLElement
        >;
        center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }
}
