'use strict';
const assert = require('yeoman-assert');
const common = require('../generators/app/lib/common');
const constanst = require('../generators/app/lib/constants');

describe('common utils', () => {
  describe('isValidProjectType function', () => {
    it('isValidProjectType returns true for class library', () => {
      assert(common.isValidProjectType(constanst.CLASS_LIB));
    });
    it('isValidProjectType returns true for console application', () => {
      assert(common.isValidProjectType(constanst.CONSOLE_APP));
    });
    it('isValidProjectType returns true for empty web application ', () => {
      assert(common.isValidProjectType(constanst.EMPTY_WEB));
    });
    it('isValidProjectType returns true for F# console application', () => {
      assert(common.isValidProjectType(constanst.FSHARP_CONSOLE_APP));
    });
    it('isValidProjectType returns true for F# empty web application', () => {
      assert(common.isValidProjectType(constanst.FSHARP_EMPTY_WEB));
    });
    it('isValidProjectType returns true for F# class library', () => {
      assert(common.isValidProjectType(constanst.FSHARP_LIB));
    });
    it('isValidProjectType returns true for F# test', () => {
      assert(common.isValidProjectType(constanst.FSHARP_TEST));
    });
    it('isValidProjectType returns true for F# web api', () => {
      assert(common.isValidProjectType(constanst.FSHARP_WEB_API));
    });
    it('isValidProjectType returns true for F# web basic application', () => {
      assert(common.isValidProjectType(constanst.FSHARP_WEB_BASIC_APP));
    });
    it('isValidProjectType returns true for Nancy web application', () => {
      assert(common.isValidProjectType(constanst.NANCY_WEB));
    });
    it('isValidProjectType returns true for xUnit test ', () => {
      assert(common.isValidProjectType(constanst.UNIT_TEST));
    });
    it('isValidProjectType returns true for Nancy web api application', () => {
      assert(common.isValidProjectType(constanst.WEB_API));
    });
    it('isValidProjectType returns true for web application', () => {
      assert(common.isValidProjectType(constanst.WEB_APP));
    });
    it('isValidProjectType returns true for web basic application', () => {
      assert(common.isValidProjectType(constanst.WEB_BASIC_APP));
    });
  });
});
