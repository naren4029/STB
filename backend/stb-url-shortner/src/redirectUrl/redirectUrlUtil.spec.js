let redirectUrlUtil = require("./redirectUrlUtil");

jest.mock("./redirectUrlUtil", () => {
  return {
    GET_urlRedirect: (req, res) => {},
    fetchExistingDataUsingCode: (code) => {},
  };
});

describe("Get Redirect URL Utility Module", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should have Redirect URL Utility defined", () => {
    expect(redirectUrlUtil).toBeDefined();

    expect(redirectUrlUtil).toBeTruthy();
  });

  it("should have GET_urlRedirect  method to be defined", () => {
    expect(redirectUrlUtil.GET_urlRedirect).toBeDefined();

    expect(redirectUrlUtil.GET_urlRedirect).toBeTruthy();
  });

  it("should call GET_urlRedirect method with params", () => {
    redirectUrlUtil.GET_urlRedirect = jest.fn();

    redirectUrlUtil.GET_urlRedirect({}, {});

    expect(redirectUrlUtil.GET_urlRedirect).toHaveBeenCalled();

    expect(redirectUrlUtil.GET_urlRedirect).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Object),
    );
  });

  it("should call GET_urlRedirect method to return string", () => {
    redirectUrlUtil.GET_urlRedirect = jest.fn();

    redirectUrlUtil.GET_urlRedirect.mockReturnValue("http://www.google.com");

    expect(redirectUrlUtil.GET_urlRedirect({}, {})).toBe(
      "http://www.google.com",
    );
  });

  it("should have fetchExistingDataUsingCode  method to be defined", () => {
    expect(redirectUrlUtil.fetchExistingDataUsingCode).toBeDefined();

    expect(redirectUrlUtil.fetchExistingDataUsingCode).toBeTruthy();
  });

  it("should call fetchExistingDataUsingCode method with param", () => {
    redirectUrlUtil.fetchExistingDataUsingCode = jest.fn();

    redirectUrlUtil.fetchExistingDataUsingCode("0x1y2z3");

    expect(redirectUrlUtil.fetchExistingDataUsingCode).toHaveBeenCalled();

    expect(redirectUrlUtil.fetchExistingDataUsingCode).toHaveBeenCalledWith(
      "0x1y2z3",
    );
  });

  it("should call fetchExistingDataUsingCode method to return object", () => {
    redirectUrlUtil.fetchExistingDataUsingCode = jest.fn();

    redirectUrlUtil.fetchExistingDataUsingCode.mockReturnValue({
      code: "0x1y2z3",
      url: "http://www.google.com",
    });

    expect(redirectUrlUtil.fetchExistingDataUsingCode({}, {})).toEqual({
      code: "0x1y2z3",
      url: "http://www.google.com",
    });
  });
});
