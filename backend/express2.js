const express = require('express');
const app = express();
const users = [{
    name: "john",
    kidneys: [
        {
            healthy: false
        }
    ]
}];

app.use(express.json());
// going to hospital

app.get('/', function (req, res) {
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let numberofHealthykidney = 0;

    for (let i = 0; i < johnkidneys.length; i++) {
        if (johnkidneys[i].healthy) {
            numberofHealthykidney = numberofHealthykidney + 1;
        }
    }

    const numberofunhealthykidney = numberofkidneys - numberofHealthykidney;

    res.json({
        numberofHealthykidney,
        numberofkidneys,
        numberofunhealthykidney
    });
});

// Add a new kidney
app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: "done!"
    });
});

// Replace all unhealthy kidneys with healthy ones
app.put('/', function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg: "done!"
    });
});

// Remove all unhealthy kidneys
app.delete('/', function (req, res) {
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidney = [];

        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidney.push({
                    healthy: true
                });
            }
        }   users[0].kidneys = newKidney;

        res.json({
            msg: "done!"
        });
    }
    

    
    res.status(411).json({
            msg:"you have no bad kidneys"
    })
});
function isThereAtleastOneUnhealthyKidney(){
    let atleastOneunhealthyKidney = false;
    
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneunhealthyKidney = true;
        }
    }
    return atleastOneunhealthyKidney;

}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
