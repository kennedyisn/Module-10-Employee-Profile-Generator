const Manager = require('../lib/teammanager');

describe('Manager class', () => {
  it('should set the name, id, and email', () => {
    const manager = new Manager('Lebron James', 6, 'manager@gmail.com', 'goat23');

    expect(manager.name).toBe('Lebron James');
    expect(manager.id).toBe(6);
    expect(manager.email).toBe('manager@gmail.com');
    expect(manager.officeNumber).toBe('goat23');
  });

  it('should return the office number using getOfficeNumber method', () => {
    const manager = new Manager('Lebron James', 6, 'manager@gmail.com', 'goat23');

    expect(manager.getOfficeNumber()).toBe('goat23');
  });

  it('should return the role using the getRole method', () => {
    const manager = new Manager('Lebron James', 6, 'manager@gmail.com', 'goat23');

    expect(manager.getRole()).toBe('Manager');
  });
});