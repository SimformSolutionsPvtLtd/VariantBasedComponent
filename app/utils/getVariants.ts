// utils/getComponentTheme.ts
import { theme } from '../theme';

type Theme = typeof theme;
type ComponentKeys = keyof Theme['components'];

// Infer the types of the variants and defaultProps for a specific component
type Variants<ComponentName extends ComponentKeys> = Theme['components'][ComponentName]['variants'];
type DefaultProps<ComponentName extends ComponentKeys> =
  Theme['components'][ComponentName]['defaultProps'];

/**
 *
 * @param componentName akjshd
 * @returns
 */
export const getComponentTheme = <ComponentName extends ComponentKeys>(
  componentName: ComponentName
): {
  variants: Variants<ComponentName>;
  defaultProps: DefaultProps<ComponentName>;
} => {
  const componentTheme = theme.components[componentName];

  if (!componentTheme) {
    console.warn(`Component "${componentName}" not found in theme.`);
    return { variants: {}, defaultProps: {} } as {
      variants: Variants<ComponentName>;
      defaultProps: DefaultProps<ComponentName>;
    };
  }

  return {
    variants: componentTheme.variants || {},
    defaultProps: componentTheme.defaultProps || {}
  };
};
