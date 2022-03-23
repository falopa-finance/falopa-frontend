import { MenuEntry } from 'cashcow-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    href: 'https://pancakeswap.finance/swap?outputCurrency=0xE0475D3494EF07ac52530De352824c6353E0C257&inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  },

  {
    label: 'Earn',
    icon: 'PoolIcon',
    items: [
      {
        label: 'Farms',
        href: '/farms',
      },
    //   {
    //     label: 'Milk Bar',
    //     href: '/milkbar',
    //   },
    ],
  },


  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },

  // {
  //   label: 'NFT Blind Box',
  //   // icon: 'NftIcon',
  //   icon: 'TicketIcon',
  //   href: '/blind-box'
  // },

  // {
  //   label: 'NFT Staking',
  //   icon: 'TicketIcon',
  //   items: [
  //     {
  //       label: 'HappyCows',
  //       href: '/stakes/1',
  //     },
  //     {
  //       label: 'Genesis',
  //       href: '/stakes/2',
  //     }
  //   ]
  // },
  // {
  //   label: 'Milk Bar',
  //   icon: 'PoolIcon',
  //   href: '/milkbar',
  // },


  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'NFT Market',
  //   // icon: 'NftIcon',
  //   icon: 'TicketIcon',
  //   href: '/nft-market'
  // },
  // {
  //   label: 'My NFTs',
  //   // icon: 'NftIcon',
  //   icon: 'TicketIcon',
  //   href: '/myNFTs'
  // },
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0xe0475d3494ef07ac52530de352824c6353e0c257-bsc',
      },
    ],
  },
  
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/CashCowProject',
  //     },
  //     {
  //       label: 'Whitepaper',
  //       href: 'https://cashcowprotocol.gitbook.io/cashcow/',
  //     },
  //   ],
  // },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href:
  //     'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
