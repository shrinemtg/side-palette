import express from 'express';
import { handleContactForm } from '../controllers/contact';

const contactRouter = express.Router();

contactRouter.post('/submit', handleContactForm);

export default contactRouter;