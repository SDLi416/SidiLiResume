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
import profilepic from '../images/profilepic.png';
import avatar1 from '../images/review_avatar_1.jpg';
import avatar2 from '../images/review_avatar_2.jpg';
import avatar3 from '../images/review_avatar_3.jpg';
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
      <p className='prose-sm text-stone-200 sm:prose-base lg:prose-sm italic'>
        {t('hero.notes')}
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
      href: 'resume.link',
      text: 'resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'contact',
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
      name: '王聪',
      text: '作为李思迪的前上司，我时常觉得以这个薪资招到他实在太值了。他在iOS开发方面的专业知识已经非常扎实，并且他对AI和web前端技术的持续学习显示了他对技术的热情和适应能力。思迪不仅自发学习新技术，而且经常在团队中积极推动技术革新，并乐于分享知识，激发团队成长。他为工作带来的价值远超他的薪资，我坚信他会为任何团队带来连续的动力和成功。',
      image: avatar1,
    },
    {
      name: '陈浩然',
      text: '作为思迪的前同事，我很高兴与他在多个iOS项目上合作。思迪不仅具有深厚的专业技能，而且他对新技术的适应能力和学习速度令人印象深刻。他的代码写作既严谨又高效，能够在保证质量的同时加快开发进程。更难能可贵的是，思迪拥有卓越的团队合作精神，他的沟通能力和对项目的承诺，极大地提升了团队的整体表现。无论是在面对复杂问题时的冷静思考，还是在项目要求严格限时完成时的出色表现，思迪都证明了自己是一名值得信赖的iOS开发者。我毫不犹豫地推荐思迪，相信他将为任何团队带来宝贵的贡献。',
      image: avatar2,
    },
    {
      name: 'Jordan Smith', 
      text: 'Working with Sidi Li was a seamless and enjoyable experience, despite the miles between us—he in China, and I in the U.S. We never met face-to-face, yet his contributions to our web project felt as close and personal as any in-office collaboration. Sidi\'s deep knowledge in iOS, coupled with his proactive pursuit of AI and front-end development skills, truly sets him apart. His passion for technology is matched by his willingness to share insights, making our remote teamwork a resounding success.',
      image: avatar3,
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/SDLi416'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sidi-li-73b219127'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
