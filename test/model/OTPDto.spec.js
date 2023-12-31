/**
 * Easy Cash By KPV
 * The Easy Cash API
 *
 * The version of the OpenAPI document: V 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EasyCashByKpv);
  }
}(this, function(expect, EasyCashByKpv) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EasyCashByKpv.OTPDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OTPDto', function() {
    it('should create an instance of OTPDto', function() {
      // uncomment below and update the code to test OTPDto
      //var instance = new EasyCashByKpv.OTPDto();
      //expect(instance).to.be.a(EasyCashByKpv.OTPDto);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new EasyCashByKpv.OTPDto();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new EasyCashByKpv.OTPDto();
      //expect(instance).to.be();
    });

    it('should have the property remask (base name: "remask")', function() {
      // uncomment below and update the code to test the property remask
      //var instance = new EasyCashByKpv.OTPDto();
      //expect(instance).to.be();
    });

    it('should have the property userID (base name: "userID")', function() {
      // uncomment below and update the code to test the property userID
      //var instance = new EasyCashByKpv.OTPDto();
      //expect(instance).to.be();
    });

    it('should have the property branchesID (base name: "branchesID")', function() {
      // uncomment below and update the code to test the property branchesID
      //var instance = new EasyCashByKpv.OTPDto();
      //expect(instance).to.be();
    });

  });

}));
