/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WabliWimage model module.
 * @module model/WabliWimage
 * @version 1.0.0
 */
class WabliWimage {
    /**
     * Constructs a new <code>WabliWimage</code>.
     * @alias module:model/WabliWimage
     */
    constructor() { 
        
        WabliWimage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WabliWimage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WabliWimage} obj Optional instance to populate.
     * @return {module:model/WabliWimage} The populated <code>WabliWimage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WabliWimage();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} data
 */
WabliWimage.prototype['data'] = undefined;

/**
 * @member {String} name
 */
WabliWimage.prototype['name'] = undefined;






export default WabliWimage;

