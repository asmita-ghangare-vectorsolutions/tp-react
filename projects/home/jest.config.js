module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
  },
  setupFiles: ["<rootDir>/setupTests.ts"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transformIgnorePatterns: ["node_modules/(?!@vector-web-components)/"],
};
