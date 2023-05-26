import { getPermalink, getBlogPermalink, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
  ],
};
  


export const footerData = {
  links: [
    {
      title: 'Site Outline',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Services', href: '/services' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Not Financial Advice',
      links: [
        { text: 'The information contained on this site is not intended to be, nor should be construed as, financial or investment advice and is intended for informational purposes only. This information is presented in good faith and on an "as is" basis with no guarantees of completeness, accuracy, usefulness or timeliness.', href: '/disclaimer' },
      ],
    },
    {
      title: ' ',
      links: [
        { text: 'Annie Cardinal is not an attorney, accountant, or financial advisor, nor is she holding herself out to be. It is strongly recommended that you consult with a financial professional before making any decisions about your particular situation.', href: '/disclaimer' },
      ],
    },
    {
      title: ' ',
      links: [
        { text: 'Annie Cardinal assumes no responsibility or liability for any errors or ommissions in the content provided. Any action you take based upon the information you find on this website is strictly at your own risk. For more, please read the full disclaimer.', href: '/disclaimer' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Disclaimer', href: getPermalink('/disclaimer') },
  ],
  footNote: 
    '© Annie Cardinal 2023 · All rights reserved.'
  ,
};
