const PirateController=require('../controllers/pirate.controller');


module.exports= app=>  {
    app.post('/api/pirate',PirateController.createPirate)
    app.get('/api/pirate',PirateController.findAllPirates)
    app.get('/api/pirate/:id',PirateController.finOnePirate)
    app.put('/api/pirate/:id', PirateController.updatePirate)
    app.delete('/api/pirate/:id',PirateController.deletePirate)
}