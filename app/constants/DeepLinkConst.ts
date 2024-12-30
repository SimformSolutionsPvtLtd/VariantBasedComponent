export const domain: string = 'variantbasedcomponent.page.link';

export const bundleId: string = 'com.simform.variantbasedcomponent';

export const deepLinkPrefixes = ['variantbasedcomponent://', `${domain}//`, `https://${domain}`];

export const deepLinkQueryParamsMatch: RegExp = /\?(.+)/;
export const routeReplace: RegExp = /.*?:\/\//g;
export const paramReplace: RegExp = /\/([^\\/]+)\/?$/;

export enum DeepLink {
  // variantbasedcomponent://magic_link&lang=en&tenantId=austin-electrical-qqm76
  MagicLink = 'magic_link',
  // variantbasedcomponent://forgot_password&lang=en&tenantId=austin-electrical-qqm76
  ForgotPassword = 'forgot_password',
  // variantbasedcomponent://?toastMessage=<message content>
  ToastMessage = 'toastMessage'
}

export default DeepLink;
