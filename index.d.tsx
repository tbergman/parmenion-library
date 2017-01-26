export * from './src/components';

export interface ITheme {}
export declare function injectGlobalStyles(theme: ITheme): void;
export declare const defaultTheme: ITheme;

export interface IThemeProviderProps {
  theme: ITheme;
}
export declare function ThemeProvider(props: IThemeProviderProps): JSX.Element;
