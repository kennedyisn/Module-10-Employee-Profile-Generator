const Engineer = require('../lib/engineer');

describe('Engineer class', () => {
  it('should set the name, id, and email', () => {
    const engineer = new Engineer('Michael Jordan', 23, 'engineer@gmail.com', 'chicagoman');

    expect(engineer.name).toBe('Michael Jordan');
    expect(engineer.id).toBe(23);
    expect(engineer.email).toBe('engineer@gmail.com');
    expect(engineer.github).toBe('chicagoman');
  });

  it('should return the github username using getGithub method', () => {
    const engineer = new Engineer('Michael Jordan', 23, 'engineer@gmail.com', 'chicagoman');

    expect(engineer.getGithub()).toBe('chicagoman');
  });

  it('should return the role using the getRole method', () => {
    const engineer = new Engineer('Michael Jordan', 23, 'engineer@gmail.com', 'chicagoman');

    expect(engineer.getRole()).toBe('Engineer');
  });
});