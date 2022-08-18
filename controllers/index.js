const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.sendStatus('Route not recognized');
});

module.exprots = router;
