export enum PageRoutes {
  HOME = '/',
  ABOUT = '/about',
  CONTACT = '/contact',
}
export enum Breakpoints {
  TABLET = 768,
  MOBILE = 576,
}

export enum LanguageIconPaths {
  TR = '/assets/tr-icon.svg',
  EN = '/assets/en-icon.svg',
}

enum Contact {
  LINKEDIN = 'LINKEDIN',
  GITHUB = 'GITHUB',
}

interface ContactInfo {
  url: string;
  color: string;
}

export const ContactLinks: Record<Contact, ContactInfo> = {
  [Contact.LINKEDIN]: {
    url: 'https://www.linkedin.com/in/emrerdem94/',
    color: '#0e76a8',
  },
  [Contact.GITHUB]: {
    url: 'https://github.com/emrerdem1',
    color: '#fafafa',
  },
};
