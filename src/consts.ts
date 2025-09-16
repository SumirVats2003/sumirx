import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'sumirx',
  description:
    'Welcome to Sumir Vats\' blog',
  href: 'https://astro-erudite.vercel.app',
  author: 'SumirVats2003',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/sumirvats',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/SumirVats2003',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/SumirVats',
    label: 'Twitter',
  },
  {
    href: 'mailto:sumirvats@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
