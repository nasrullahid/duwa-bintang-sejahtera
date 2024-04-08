import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Tentang',
      href: getPermalink('/about'),
    },
    {
      text: 'Kelas',
      href: getPermalink('/courses'),
    },
    {
      text: 'Info Prakerja',
      href: getPermalink('/prakerja'),
    },
    {
      text: 'Kontak',
      href: getPermalink('/contact'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Tentang', href: getPermalink('/about') },
        { text: 'Kontak', href: getPermalink('/contact') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Ketentuan Layanan', href: getPermalink('/terms') },
        { text: 'Kebijakan Privasi', href: getPermalink('/privacy') },
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/6285200226888' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/bacaid_' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/MagauGroup.Official' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/magaugroup' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
