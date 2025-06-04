
export const mockGames = [
  {
    id: '1',
    homeTeam: {
      name: 'BOS',
      city: 'Boston',
      logo: '',
      score: 3
    },
    awayTeam: {
      name: 'VAN',
      city: 'Vancouver',
      logo: '',
      score: 5
    },
    status: 'final' as const,
    time: '',
    date: 'NOV 10',
    period: 'FINAL'
  },
  {
    id: '2',
    homeTeam: {
      name: 'TOR',
      city: 'Toronto',
      logo: '',
      score: 3
    },
    awayTeam: {
      name: 'NYY',
      city: 'New York',
      logo: '',
      score: 5
    },
    status: 'live' as const,
    time: '',
    date: '',
    period: '5th'
  },
  {
    id: '3',
    homeTeam: {
      name: 'TOR',
      city: 'Toronto',
      logo: '',
      score: 126
    },
    awayTeam: {
      name: 'BOS',
      city: 'Boston',
      logo: '',
      score: 117
    },
    status: 'live' as const,
    time: '',
    date: '',
    period: '2nd | 17:32'
  },
  {
    id: '4',
    homeTeam: {
      name: 'MON',
      city: 'Montreal',
      logo: '',
      score: 0
    },
    awayTeam: {
      name: 'CHI',
      city: 'Chicago',
      logo: '',
      score: 0
    },
    status: 'upcoming' as const,
    time: '5:30 PM',
    date: 'NOV 11',
  },
  {
    id: '5',
    homeTeam: {
      name: 'ANA',
      city: 'Anaheim',
      logo: '',
      score: 0
    },
    awayTeam: {
      name: 'COL',
      city: 'Colorado',
      logo: '',
      score: 0
    },
    status: 'upcoming' as const,
    time: '7:00 PM',
    date: '',
  },
  {
    id: '6',
    homeTeam: {
      name: 'DAL',
      city: 'Dallas',
      logo: '',
      score: 0
    },
    awayTeam: {
      name: 'EDM',
      city: 'Edmonton',
      logo: '',
      score: 0
    },
    status: 'upcoming' as const,
    time: '8:00 PM',
    date: 'NOV 12',
  }
];
