import { type ThemeMode } from '../../theme';
import Colors from '../../theme/Colors';
import { type LabelVariant } from '../label';
import { type ButtonVariant } from './CustomButtonTypes';

/**
 * Maps the button variant to the corresponding label variant.
 *
 * @param {ButtonVariant} buttonVariant - The variant of the button.
 * @returns {LabelVariant} The corresponding label variant.
 */
export const getLabelVariant = (buttonVariant: ButtonVariant): LabelVariant => {
  switch (buttonVariant) {
    case 'outline':
    case 'solid':
      return 'title';
    case 'hyperlink':
      return 'caption';
    default:
      return 'body';
  }
};

/**
 * Determines the color of the activity indicator based on the button variant.
 *
 * @param {ButtonVariant} buttonVariant - The variant of the button.
 * @param {ThemeMode} theme - The theme mode of the application. (Unused)
 * @returns {keyof ThemeColors} The color of the activity indicator.
 */
export const activityIndicatorColor = (buttonVariant: ButtonVariant, theme: ThemeMode): string => {
  switch (buttonVariant) {
    case 'outline':
      return Colors[theme]?.lightBlue;
    case 'solid':
      return Colors[theme]?.white;
    case 'hyperlink':
      return Colors[theme]?.lightBlue;
    default:
      return Colors[theme]?.white;
  }
};

/**
 * Determines the color of the activity indicator based on the button variant.
 *
 * @param {ButtonVariant} buttonVariant - The variant of the button.
 * @param {ThemeMode} theme - The theme mode of the application. (Unused)
 * @returns {keyof ThemeColors} The color of the activity indicator.
 */
export const labelColor = (buttonVariant: ButtonVariant, theme: ThemeMode): string => {
  switch (buttonVariant) {
    case 'outline':
      return Colors[theme]?.lightBlue;
    case 'solid':
      return Colors[theme]?.white;
    case 'hyperlink':
      return Colors[theme]?.lightBlue;
    default:
      return Colors[theme]?.white;
  }
};
