const whatIsTheWeekday = require("./whatIsTheWeekday");

describe('what-is-the-weekday', () => {
  const DATE = new Date('2018-01-01');

  beforeEach(() => {
    jest.resetAllMocks();
  })

  it('should be a function', () => {
    expect(typeof whatIsTheWeekday).toBe('function');
  });

  it('should return a string', () => {
    const result = whatIsTheWeekday();
    expect(typeof result).toBe('string');
  });

  describe(`given ${DATE}`, () => {
    it('should return "Monday" for en-us', () => {
      const weekday = whatIsTheWeekday({ lang: 'en-us', date: DATE });

      expect(weekday).toBe('Monday')
    })

    it('should return "Segunda-Feira" for pt-br', () => {
      const weekday = whatIsTheWeekday({ lang: 'pt-br', date: DATE });

      expect(weekday).toBe('Segunda-Feira')
    })
  })

  describe('given a date in the future', () => {
    it('should return "Tuesday" for en-us', () => {
      const weekday = whatIsTheWeekday({ lang: 'en-us', date: new Date('2050-01-03') });

      expect(weekday).toBe('Monday')
    })

    it('should return "Terça-Feira" for pt-br', () => {
      const weekday = whatIsTheWeekday({ lang: 'pt-br', date: new Date('2050-01-03') });

      expect(weekday).toBe('Segunda-Feira')
    })
  })

  it('should return default mocked date in english', () => {
    const _Date = Date;
    global.Date = jest.fn(() => DATE);
    global.Date.UTC = _Date.UTC;
    global.Date.parse = _Date.parse;
    global.Date.now = _Date.now;

    const result = whatIsTheWeekday();
    expect(result).toBe('Monday');
  })

})