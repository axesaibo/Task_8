const express = require('express');
const router = express.Router();
const passwordValidator = require('password-validator');


const schema = new passwordValidator();
schema
  .is().min(8)        
  .is().max(20)       
  .has().uppercase()  
  .has().lowercase()  
  .has().digits(1)     
  .has().symbols(1)    
  .has().not().spaces(); 


router.post('/check-password', (req, res) => {
  
});

module.exports = router;
