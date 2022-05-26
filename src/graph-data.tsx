const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const baseData = {
  labels,
  datasets: [
    {
      label: 'Average Orders',
      data: [40, 10, 20, 40, 35, 42, 25],
      backgroundColor: 'rgba(80, 87, 141, 1)'
    },
    {
      label: 'Predicted orders',
      data: [60, 40, 44, 63, 54, 57, 36],
      backgroundColor: 'rgba(230,140,140, 1)'
    }
  ]
};

export const platformsOrderData: { [key: string]: number[] } = {
  instagram: [5, 5, 6, 8, 5, 2, 1],
  facebook: [5, 8, 6, 3, 2, 9, 5],
  cheddar: [7, 8, 3, 3, 4, 6, 4],
  commbank: [8, 4, 6, 3, 8, 9, 5],
  bobsburger: [2, 4, 5, 2, 3, 4, 1],
  mailchimp: [3, 1, 3, 5, 2, 2, 4],
  twilio: [2, 2, 3, 1, 3, 2, 4]
};

export const appOrderData: { [key: string]: number[] } = {
  deliveroo: [5, 5, 6, 8, 5, 2, 1],
  doordash: [8, 16, 7, 5, 6, 7, 8],
  chewzie: [5, 8, 6, 3, 2, 9, 5],
  meandyou: [7, 8, 3, 3, 4, 6, 4],
  mryum: [8, 4, 6, 3, 8, 9, 5],
  dq: [3, 1, 3, 5, 2, 2, 4],
  tablecheck: [2, 2, 3, 1, 3, 2, 4],
  opentable: [2, 2, 3, 1, 3, 2, 4]
};

export const platforms = [
  {
  id: 'instagram',
  name: 'Instagram',
  type: 'Social media'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    type: 'Social media'
  },
  {
    id: 'cheddar',
    name: 'Cheddar',
    type: 'Deals discovery app'
  },
  {
    id: 'commbank',
    name: 'Comm Bank',
    type: 'Aussie\'s no. 1 bank'
  },
  {
    id: 'bobsburger',
    name: 'Bob\'s Burger',
    type: 'Your website'
  },
  {
    id: 'mailchimp',
    name: 'Main Chimp',
    type: 'Email platform'
  },
  {
    id: 'twilio',
    name: 'Twilio',
    type: 'SMS platform'
  },
  {
    id: 'tiktok',
    name: 'Tik Tok',
    type: 'Social media'
  }
];

export const apps = [
  {
    id: 'deliveroo',
    name: 'Deliveroo',
    type: 'Pickup & delivery'
  },
  {
    id: 'doordash',
    name: 'Door Dash',
    type: 'Pickup & delivery'
  },
  {
    id: 'chewzie',
    name: 'Chewzie',
    type: 'Pickup & delivery'
  },
  {
    id: 'meandyou',
    name: 'Me & u',
    type: 'In-venue ordering'
  },
  {
    id: 'mryum',
    name: 'Mr Yum',
    type: 'In-venue ordering'
  },
  {
    id: 'dq',
    name: 'DQ',
    type: 'In-venue ordering'
  },
  {
    id: 'tablecheck',
    name: 'Table Check',
    type: 'Reservations'
  },
  {
    id: 'opentable',
    name: 'Open Table',
    type: 'Reservations'
  }
];