declare module 'react/jsx-runtime' {
  export function jsx(type: any, props?: any, key?: any): any;
  export function jsxs(type: any, props?: any, key?: any): any;
  export function jsxDEV(type: any, props?: any, key?: any): any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module '@inertiajs/react' {
  import * as React from 'react';
  export const Head: React.FC<any>;
  export const Link: React.FC<any>;
  export function usePage<T = any>(): { props: T };
  export default {} as any;
}
