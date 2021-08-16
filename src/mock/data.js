import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '윤세영 | Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '윤세영',
  subtitle: "I'am the Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '안녕하세요. 2년차 개발자 윤세영입니다.',
  paragraphTwo:
    'Android 개발로 시작했지만, Backend, Frontend 등 다양한 경험을 하면서 여러 개발자들과 서로 소통하고 배우는 것을 좋아하는 개발자입니다.',
  paragraphThree:
    '패턴들과 새로운 패러다임을 통해 더 좋은 개발 더 클린한 코드를 위해 항상 고민하고 공부하고 있습니다.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.PNG',
    title: 'Auto Provisioning\n시스템 개발 및 유지보수',
    info: 'Django와 Kubernetes를 사용하여 여러 서버에 Nginx설정을 배포하는 시스템을 개발 및 유지보수를 하였습니다. 또한 javascript와 php를 사용하여 어드민 페이지를 개발 및 유지보수를 진행하였습니다.',
    info2: '',
    url: ' ',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: '방송플랫폼 어플리케이션 개발',
    info: 'RTMP기반 방송플랫폼 어플리케이션 런칭을 위해 신규 페이지 개발 및 기존 페이지 개선하였습니다. MVVM패턴으로 개발하였고 rxKotlin과 Retrofit2라이브러리를 통해 API를 처리하였습니다.',
    info2: '',
    url: ' ',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'PC 기반 시뮬레이터 런처를 안드로이드 기반 런처로 개발',
    info: '기존의 PC기반의 런처를 모바일로 변경하여 유선으로 생기는 유지보수 문제를 줄이고 안드로이드 기반으로 바뀌면서 설치비용이 크게 줄었다.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

export const careersData = [
  {
    id: nanoid(),
    img: 'company1.png',
    title: '아틀라스네트웍스',
    info: '2019. 9 ~ 현재',
    info2: '',
    url: ' ',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'company2.png',
    title: 'PNI Company',
    info: '2018. 10 ~ 2019. 8',
    info2: '',
    url: ' ',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Mail',
  email: 'dbstpdud09@naver.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: ' ',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: ' ',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: ' ',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Yun-SeYeong',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
