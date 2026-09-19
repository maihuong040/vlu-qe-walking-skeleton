const { login } = require("./login");

describe("Login function", () => {
  test("Trả về true khi username và password đúng", () => {
    expect(login("admin", "1234")).toBe(true);
  });

  test("Trả về false khi username sai", () => {
    expect(login("user", "123")).toBe(false);
  });

  test("Trả về false khi password sai", () => {
    expect(login("admin", "456")).toBe(false);
  });

  test("Trả về false khi cả username và password sai", () => {
    expect(login("user", "456")).toBe(false);
  });
});
