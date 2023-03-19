const Employee = require('../lib/employee');

describe('Employee class', () => {
  it('should set the name, id, and email', () => {
    const employee = new Employee('Tom Brady', 123, 'sampleemail@gmail.com');
    
    expect(employee.name).toBe('Tom Brady');
    expect(employee.id).toBe(123);
    expect(employee.email).toBe('sampleemail@gmail.com');
  });

  it('should get the name using getName method', () => {
    const employee = new Employee('Tom Brady', 123, 'sampleemail@gmail.com');
    
    expect(employee.getName()).toBe('Tom Brady');
  });

  it('should return the id using the getId method', () => {
    const employee = new Employee('Tom Brady', 123, 'sampleemail@gmail.com');
    
    expect(employee.getId()).toBe(123);
  });

  it('should return the email using the getEmail method', () => {
    const employee = new Employee('Tom Brady', 123, 'sampleemail@gmail.com');
    
    expect(employee.getEmail()).toBe('sampleemail@gmail.com');
  });

  it('should return the role using the getRole method', () => {
    const employee = new Employee('Tom Brady', 123, 'sampleemail@gmail.com');
    
    expect(employee.getRole()).toBe('Employee');
  });
});