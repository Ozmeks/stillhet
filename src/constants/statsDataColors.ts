interface StatsDataColors {
  id: string;
  title: string,
  colorCardBg: string;
  colorCardImg: string;
};

export const STATS_DATA_COLORS: StatsDataColors[] = [
    {
    id: 'total_calm',
    title: 'Спокойных дней',
    colorCardBg: '#69B069',
    colorCardImg: '#2B5B33',
    },
    {
    id: 'total_relax',
    title: 'Расслабленных дней',
    colorCardBg: '#69A1B0',
    colorCardImg: '#2B505B',
    },
    {
    id: 'total_focus',
    title: 'Фокусированных дней',
    colorCardBg: '#9CB069',
    colorCardImg: '#595B2B',
    },
    {
    id: 'total_anxiety',
    title: 'Тревожных дней',
    colorCardBg: '#B0696A',
    colorCardImg: '#5B2B2C',
    },
    {
    id: 'total_minutes',
    title: 'Минут медитации',
    colorCardBg: '#69B09C',
    colorCardImg: '#2B5B54',
    }
  ];