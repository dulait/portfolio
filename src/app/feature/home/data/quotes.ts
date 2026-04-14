import { Quote } from '../model/quote.interface';

export const quotes: Quote[] = [
  {
    text: 'You have power over your mind, not outside events. Realize this, and you will find strength',
    author: 'Marcus Aurelius',
  },
  {
    text: 'The happiness of your life depends upon the quality of your thoughts',
    author: 'Marcus Aurelius',
  },
  {
    text: 'Difficulties strengthen the mind, as labor does the body',
    author: 'Seneca',
  },
  {
    text: 'No man is free who is not master of himself',
    author: 'Epictetus',
  },
  {
    text: 'First say to yourself what you would be; and then do what you have to do',
    author: 'Epictetus',
  },
  {
    text: 'Wealth consists not in having great possessions, but in having few wants',
    author: 'Epictetus',
  },
  {
    text: 'The best revenge is to be unlike him who performed the injury',
    author: 'Marcus Aurelius',
  },
  {
    text: 'If it is not right, do not do it. If it is not true, do not say it',
    author: 'Marcus Aurelius',
  },
  {
    text: 'We suffer more often in imagination than in reality',
    author: 'Seneca',
  },
  {
    text: 'The obstacle on the path becomes the path. Never forget, within every obstacle is an opportunity to improve our condition',
    author: 'Marcus Aurelius',
  },
] as const;
