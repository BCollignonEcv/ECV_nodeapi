const Joi = require('joi');

const nameSchema = Joi.string().min(6).max(20);

const emailSchema = Joi.string().email();

const urlSchema = Joi.string().uri();

const idSchema = Joi.string().guid({ version: 'uuidv4' });

module.exports = {
    nameSchema,
    emailSchema,
    urlSchema,
    idSchema
};