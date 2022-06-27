let generateShortUrlUtil = require("./generateShortUrlUtil");

describe("Get Generate Short URL Module", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should have Generate Short URL Utility defined", () => {
    expect(generateShortUrlUtil).toBeDefined();

    expect(generateShortUrlUtil).toBeTruthy();
  });

  it("should have randomString  method to be defined", () => {
    expect(generateShortUrlUtil.randomString).toBeDefined();

    expect(generateShortUrlUtil.randomString).toBeTruthy();
  });

  it("should call randomString method with integer and return string", () => {
    const spy = jest.spyOn(generateShortUrlUtil, "randomString");
    const randomString = generateShortUrlUtil.randomString(7);

    expect(spy).toHaveBeenCalled();
    expect(randomString).toEqual(expect.any(String));

    spy.mockRestore();
  });

  it("should have parseURL  method to be defined", () => {
    expect(generateShortUrlUtil.parseURL).toBeDefined();

    expect(generateShortUrlUtil.parseURL).toBeTruthy();
  });

  it("should have Generate Short URL defined", () => {
    expect(generateShortUrlUtil).toBeDefined();

    expect(generateShortUrlUtil).toBeTruthy();
  });

  it("should call parseURL method with string and return formated string", () => {
    const spy = jest.spyOn(generateShortUrlUtil, "parseURL");
    const parseURL = generateShortUrlUtil.parseURL("http://www.google.com");

    expect(spy).toHaveBeenCalled();
    expect(parseURL).toBe("www.google.com");

    spy.mockRestore();
  });

  jest.mock("./generateShortUrlUtil", () => {
    return {
      POST_processData: (req, res) => {},
      fetchExistingDataUsingAddress: (url) => {},
      insertData: (code, address) => {},
    };
  });

  it("should have POST_processData  method to be defined", () => {
    expect(generateShortUrlUtil.POST_processData).toBeDefined();

    expect(generateShortUrlUtil.POST_processData).toBeTruthy();
  });

  it("should call POST_processData method with params", () => {
    generateShortUrlUtil.POST_processData = jest.fn();

    generateShortUrlUtil.POST_processData({}, {});

    expect(generateShortUrlUtil.POST_processData).toHaveBeenCalled();

    expect(generateShortUrlUtil.POST_processData).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Object),
    );
  });

  it("should call POST_processData method to return object", () => {
    generateShortUrlUtil.POST_processData = jest.fn();

    generateShortUrlUtil.POST_processData.mockReturnValue({
      url: "http://sho.rt/sdf87sf",
    });

    expect(generateShortUrlUtil.POST_processData({}, {})).toEqual({
      url: "http://sho.rt/sdf87sf",
    });
  });

  it("should have insertData  method to be defined", () => {
    expect(generateShortUrlUtil.insertData).toBeDefined();

    expect(generateShortUrlUtil.insertData).toBeTruthy();
  });

  it("should call insertData method with params", () => {
    generateShortUrlUtil.insertData = jest.fn();

    generateShortUrlUtil.insertData("sdf87sf", "www.google.com");

    expect(generateShortUrlUtil.insertData).toHaveBeenCalled();

    expect(generateShortUrlUtil.insertData).toHaveBeenCalledWith(
      "sdf87sf",
      "www.google.com",
    );
  });

  it("should call insertData method to return object", () => {
    generateShortUrlUtil.insertData = jest.fn();

    generateShortUrlUtil.insertData.mockReturnValue({});

    expect(generateShortUrlUtil.insertData({})).toEqual({});
  });

  it("should have fetchExistingDataUsingAddress  method to be defined", () => {
    expect(generateShortUrlUtil.fetchExistingDataUsingAddress).toBeDefined();

    expect(generateShortUrlUtil.fetchExistingDataUsingAddress).toBeTruthy();
  });

  it("should call fetchExistingDataUsingAddress method with params", () => {
    generateShortUrlUtil.fetchExistingDataUsingAddress = jest.fn();

    generateShortUrlUtil.fetchExistingDataUsingAddress("www.google.com");

    expect(
      generateShortUrlUtil.fetchExistingDataUsingAddress,
    ).toHaveBeenCalled();

    expect(
      generateShortUrlUtil.fetchExistingDataUsingAddress,
    ).toHaveBeenCalledWith("www.google.com");
  });

  it("should call fetchExistingDataUsingAddress method to return object", () => {
    generateShortUrlUtil.fetchExistingDataUsingAddress = jest.fn();

    generateShortUrlUtil.fetchExistingDataUsingAddress.mockReturnValue({
      code: "0x1y2z3",
      url: "http://www.google.com",
    });

    expect(generateShortUrlUtil.fetchExistingDataUsingAddress({}, {})).toEqual({
      code: "0x1y2z3",
      url: "http://www.google.com",
    });
  });
});
