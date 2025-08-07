import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.number().integer().min(6).max(16).required(),
  email: Joi.string().min(3).max(30).required(),
  isFavourite: Joi.boolean().required(),
  contactType: Joi.string().min(3).max(30).required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.number().integer().min(6).max(16),
  email: Joi.string().min(3).max(30),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().min(3).max(30),
});
