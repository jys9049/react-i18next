const path = require("path");

module.exports = {
  input: ["./src/**/*.{ts,tsx}"],
  output: "./",
  options: {
    debug: true,
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".ts", ".tsx"],
    },
    lngs: ["ko", "en"],
    ns: ["translation"],
    defaultLng: "ko",
    defaultNs: "translation",
    defaultValue(lng, ns, key, value) {
      const keyAsDefaultValue = "ko";
      if (keyAsDefaultValue.includes(lng)) {
        return key;
      }
      return "[작성 필요]";
    },
    resource: {
      loadPath: path.join(__dirname, "/src/i18n/locales/{{lng}}/{{ns}}.json"),
      savePath: path.join(__dirname, "/src/i18n/locales/{{lng}}/{{ns}}.json"),
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
    metadata: {},
    allowDynamicKeys: false,
  },
};
