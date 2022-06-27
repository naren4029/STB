const connectionConfig = require("./connectionConfig");

describe("Get Connection Config Module", () => {
  it("should have Connection Config defined", () => {
    expect(connectionConfig).toBeDefined();

    expect(connectionConfig).toBeTruthy();
  });

  it("should call getConnectionDetails method with string and return string", () => {
    const spy = jest.spyOn(connectionConfig, "getConnectionDetails");
    const getConnectionDetails = connectionConfig.getConnectionDetails("host");

    expect(spy).toHaveBeenCalled();
    expect(getConnectionDetails).toEqual(
      expect.any(String) || expect.any(Number),
    );

    spy.mockRestore();
  });
});
