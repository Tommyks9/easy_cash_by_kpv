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


import ApiClient from './ApiClient';
import Cat from './model/Cat';
import CreateCatDto from './model/CreateCatDto';
import OTPDto from './model/OTPDto';
import UserAuthDto from './model/UserAuthDto';
import AuthApi from './api/AuthApi';
import CatsApi from './api/CatsApi';


/**
* The Easy Cash API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var EasyCashByKpv = require('index'); // See note below*.
* var xxxSvc = new EasyCashByKpv.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new EasyCashByKpv.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new EasyCashByKpv.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new EasyCashByKpv.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version V 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Cat model constructor.
     * @property {module:model/Cat}
     */
    Cat,

    /**
     * The CreateCatDto model constructor.
     * @property {module:model/CreateCatDto}
     */
    CreateCatDto,

    /**
     * The OTPDto model constructor.
     * @property {module:model/OTPDto}
     */
    OTPDto,

    /**
     * The UserAuthDto model constructor.
     * @property {module:model/UserAuthDto}
     */
    UserAuthDto,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The CatsApi service constructor.
    * @property {module:api/CatsApi}
    */
    CatsApi
};
