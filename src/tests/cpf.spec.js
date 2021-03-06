import { cpfValidation } from "../index";

describe("cpf validation", () => {
  it("should return true to valid cpf wythout hyphen and points", () => {
    expect(cpfValidation("14552586017")).toBeTruthy();
  });

  it("should return true to valid cpf with hyphen and points", () => {
    expect(cpfValidation("145.525.860-17")).toBeTruthy();
  });

  it("should return false with letters", () => {
    expect(cpfValidation("14552586017a")).toBeFalsy();
  });

  it("should return false to invalid cpf wythout hyphen and points", () => {
    expect(cpfValidation("00011122233")).toBeFalsy();
  });

  it("should return false to invalid cpf with hyphen and points", () => {
    expect(cpfValidation("000.111.222-33")).toBeFalsy();
  });
});
