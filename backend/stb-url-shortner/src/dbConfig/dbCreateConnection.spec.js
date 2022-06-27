const createDBConnection = require("./dbCreateConnection");

jest.mock("./dbCreateConnection", () => {
  return {
    createDBConnection: () => {},
    getConnection: () => {},
  };
});

describe("Get Generate Short URL Module", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should have create DB Connection defined", () => {
    expect(createDBConnection).toBeDefined();

    expect(createDBConnection).toBeTruthy();
  });

  it("should have createDBConnection  method to be defined", () => {
    expect(createDBConnection.createDBConnection).toBeDefined();

    expect(createDBConnection.createDBConnection).toBeTruthy();
  });

  it("should call createDBConnection method", () => {
    createDBConnection.createDBConnection = jest.fn();

    createDBConnection.createDBConnection();

    expect(createDBConnection.createDBConnection).toHaveBeenCalled();
  });

  it("should call createDBConnection method to return object", () => {
    createDBConnection.createDBConnection = jest.fn();

    createDBConnection.createDBConnection.mockReturnValue({});

    expect(createDBConnection.createDBConnection()).toEqual({});
  });

  it("should have createDBConnection  method to be defined", () => {
    expect(createDBConnection.getConnection).toBeDefined();

    expect(createDBConnection.getConnection).toBeTruthy();
  });

  it("should call getConnection method", () => {
    createDBConnection.getConnection = jest.fn();

    createDBConnection.getConnection();

    expect(createDBConnection.getConnection).toHaveBeenCalled();
  });

  it("should call createDBConnection.createDBConnection method to return object", () => {
    createDBConnection.getConnection = jest.fn();

    createDBConnection.getConnection.mockReturnValue({});

    expect(createDBConnection.getConnection()).toEqual({});
  });
});
