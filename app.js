const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
    next();
};


const authenticateUser = (req, res, next) => {
    
};


app.get('/dashboard', authenticateUser, (req, res) => {
    
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(loggerMiddleware);


const ecommerceRoutes = require('./routes/ecommerceRoutes');
const passwordStrengthRoutes = require('./routes/passwordStrengthRoutes');


app.use('/ecommerce', ecommerceRoutes);
app.use('/password', passwordStrengthRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
