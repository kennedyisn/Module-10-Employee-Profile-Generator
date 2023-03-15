const Intern = require('/lib/intern.js');

describe('Intern class', () => {
  it('should set the name, id, and email', () => {
    const intern = new Intern('Jon Snow', 1414, 'promised.prince@gmail.com', 'Devry University');

    expect(intern.name).toBe('Jon Snow');
    expect(intern.id).toBe(1414);
    expect(intern.email).toBe('promised.prince@gmail.com');
    expect(intern.school).toBe('Devry University');
  });

  it('should return the intern;s university using getSchool method', () => {
    const intern = new Intern('Jon Snow', 1414, 'promised.prince@gmail.com', 'Devry University');

    expect(intern.getSchool()).toBe('Devry University');
  });

  it('should get the role using getRole method', () => {
    const intern = new Intern('Jon Snow', 1414, 'promised.prince@gmail.com', 'Devry University');

    expect(intern.getRole()).toBe('Intern');
  });
});