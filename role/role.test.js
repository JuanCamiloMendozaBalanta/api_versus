const { getRoles, getRolesByCode } = require('./role.controller');

describe('Role', () => {
  it('Should get the ROLES ', () => {
    const roles = getRoles();
    expect(roles).toBeDefined();
    expect(roles.length).toEqual(9);
  });

  it('Should get Specific Role ', () => {
    const code = 'GK';
    const role = getRolesByCode(code);
    expect(role).toBeDefined();
    expect(role.code).toEqual(code);
  });
});
