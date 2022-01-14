const basicSchemas = require('./schemas');

const Joi = require('joi');
const userSchema = {};

userSchema.get = Joi.object().keys({
    id: basicSchemas.idSchema.required()
}).unknown(true);

userSchema.create = Joi.object().keys({
    firstname: basicSchemas.nameSchema.required(),
    lastname: basicSchemas.nameSchema.required(),
    username: basicSchemas.nameSchema.required(),
    email: basicSchemas.emailSchema.required(),
    githubUrl: basicSchemas.urlSchema.required(),
    role_id: basicSchemas.idSchema.required()
});

userSchema.update = Joi.object().keys({
    firstname: basicSchemas.nameSchema,
    lastname: basicSchemas.nameSchema,
    username: basicSchemas.nameSchema,
    email: basicSchemas.emailSchema,
    githubUrl: basicSchemas.urlSchema,
    role_id: basicSchemas.idSchema
});


userSchema.delete = Joi.object().keys({
    id: basicSchemas.idSchema.required()
});

module.exports = userSchema;