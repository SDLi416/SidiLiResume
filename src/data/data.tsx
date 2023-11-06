import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import {useTranslation} from '../hooks/useTranslation';
import heroImage from '../images/header-background1.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioIds,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'meta.title',
  description: "meta.description",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

const HeroDescription: FC = memo(() => {
  const {t} = useTranslation();
  return (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {[...Array(9).keys()].map((i) => (
          <>
            {(i + 1) % 2 === 0 ? <strong className="text-stone-100">{t(`hero.intro.${i + 1}`)}</strong> : t(`hero.intro.${i + 1}`)}
          </>
        ))}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {[...Array(5).keys()].map((i) => (
          <>
            {(i + 1) % 2 === 0 ? <strong className="text-stone-100">{t(`hero.hobby.${i + 1}`)}</strong> : t(`hero.hobby.${i + 1}`)}
          </>
        ))}
      </p>
    </>
  )})

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `hero.name`,
  description: <HeroDescription />,
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `about.description`,
  aboutItems: [
    {label: 'about.label.location', text: 'about.location', Icon: MapIcon},
    {label: 'about.label.age', text: 'about.age', Icon: CalendarIcon},
    {label: 'about.label.nationality', text: 'about.nationality', Icon: FlagIcon},
    {label: 'about.label.interests', text: 'about.interests', Icon: SparklesIcon},
    {label: 'about.label.study', text: 'about.study', Icon: AcademicCapIcon},
    {label: 'about.label.employment', text: 'about.employment', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'skill.mobile.title',
    skills: [
      {
        name: 'skill.mobile.1',
        level: 10,
      },
      {
        name: 'skill.mobile.2',
        level: 10,
      },
      {
        name: 'skill.mobile.3',
        level: 8,
      },
    ],
  },
  {
    name: 'skill.fe.title',
    skills: [
      {
        name: 'skill.fe.1',
        level: 8,
      },
      {
        name: 'skill.fe.2',
        level: 8,
      },
      {
        name: 'skill.fe.3',
        level: 5,
      },
    ],
  },  
  {
    name: 'skill.ai.title',
    skills: [
      {
        name: 'skill.ai.1',
        level: 8,
      },
      {
        name: 'skill.ai.2',
        level: 6,
      },
      {
        name: 'skill.ai.3',
        level: 5,
      },
    ],
  },
  {
    name: 'skill.aigc.title',
    skills: [
      {
        name: 'skill.aigc.1',
        level: 9,
      },
      {
        name: 'skill.aigc.2',
        level: 8,
      },
      {
        name: 'skill.aigc.3',
        level: 8,
      },
    ],
  },
  {
    name: 'skill.xr.title',
    skills: [
      {
        name: 'skill.xr.1',
        level: 8,
      },
      {
        name: 'skill.xr.2',
        level: 5,
      },
    ],
  },
  {
    name: 'skill.lan.title',
    skills: [
      {
        name: 'skill.lan.1',
        level: 10,
      },
      {
        name: 'skill.lan.2',
        level: 8,
      },
      {
        name: 'skill.lan.3',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
    fullDescription: 'Give a full description of your project here.',
    role: 'Frontend Developer',
    duration: 'Jan 2020 - Present',
    achievements: 'Achievements: ',
  },
];

export const portfolioIds: PortfolioIds[] = [
  {id: "iheart", image: porfolioImage1, url: "https://www.qimai.cn/app/baseinfo/appid/1136489668/country/cn"},
  {id: "cowlevel", image: porfolioImage2, url: "https://apps.apple.com/cn/app/id1342182891"},
  {id: "babyfs", image: porfolioImage3, url: "https://apps.apple.com/cn/app/id1229566596"},
  {id: "soundbridge", image: porfolioImage4, url: "https://soundbridge.com.cn/"},
  {id: "reviewhelper", image: porfolioImage5},
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'education.iit.date',
    location: 'education.iit.location',
    title: 'education.iit.title',
    content: 'education.iit.content',
  },
  {
    date: 'education.scnu.date',
    location: 'education.scnu.location',
    title: 'education.scnu.title',
    content: 'education.scnu.content',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'work.nd.date',
    location: 'work.nd.location',
    title: 'work.nd.title',
    content: 'work.nd.content',
  },
  {
    date: 'work.miaodou.date',
    location: 'work.miaodou.location',
    title: 'work.miaodou.title',
    content: 'work.miaodou.content',
  },
  {
    date: 'work.babyfs.date',
    location: 'work.babyfs.location',
    title: 'work.babyfs.title',
    content: 'work.babyfs.content',
  },
  {
    date: 'work.breo.date',
    location: 'work.breo.location',
    title: 'work.breo.title',
    content: 'work.breo.content',
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

const myEmail = 'icubic@qq.com'

export const contact: ContactSection = {
  headerText: 'mail.title',
  description: 'mail.description',
  items: [
    {
      type: ContactType.Email,
      text: myEmail,
      href: `mailto:${myEmail}`,
    },
    {
      type: ContactType.Location,
      text: 'Shenzhen, China',
      href: 'https://www.google.com/maps/place/Shenzhen/@22.5551603,114.0538788,11z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'SDLi416',
      href: 'https://github.com/SDLi416',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
