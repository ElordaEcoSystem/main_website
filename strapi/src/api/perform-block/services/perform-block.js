'use strict';

/**
 * perform-block service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::perform-block.perform-block');
