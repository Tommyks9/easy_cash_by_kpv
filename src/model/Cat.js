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

import ApiClient from '../ApiClient';

/**
 * The Cat model module.
 * @module model/Cat
 * @version V 0.0.1
 */
class Cat {
    /**
     * Constructs a new <code>Cat</code>.
     * @alias module:model/Cat
     * @param age {Number} 
     * @param breed {String} 
     */
    constructor(age, breed) { 
        
        Cat.initialize(this, age, breed);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, age, breed) { 
        obj['age'] = age;
        obj['breed'] = breed;
    }

    /**
     * Constructs a <code>Cat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Cat} obj Optional instance to populate.
     * @return {module:model/Cat} The populated <code>Cat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Cat();

            if (data.hasOwnProperty('age')) {
                obj['age'] = ApiClient.convertToType(data['age'], 'Number');
            }
            if (data.hasOwnProperty('breed')) {
                obj['breed'] = ApiClient.convertToType(data['breed'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Cat</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Cat</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Cat.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['breed'] && !(typeof data['breed'] === 'string' || data['breed'] instanceof String)) {
            throw new Error("Expected the field `breed` to be a primitive type in the JSON string but got " + data['breed']);
        }

        return true;
    }


}

Cat.RequiredProperties = ["age", "breed"];

/**
 * @member {Number} age
 */
Cat.prototype['age'] = undefined;

/**
 * @member {String} breed
 */
Cat.prototype['breed'] = undefined;






export default Cat;
