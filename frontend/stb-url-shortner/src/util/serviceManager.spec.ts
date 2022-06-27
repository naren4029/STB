import serviceManager from "./serviceManager";

describe("fetch service manager object", () => {
  it("should have api proprty", () => {
    expect(serviceManager).toHaveProperty("api");
  });

  it("should call api function", () => {
    const mockFn = jest.fn();
    serviceManager.api = new mockFn();
    expect(serviceManager.api).toBeDefined();
    expect(mockFn).toHaveBeenCalled();
  });
});
