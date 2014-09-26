$(function() {
    var relayr = RELAYR.init({
        //appId: "c0903091-4355-4d9d-b69a-8537b2c95b72"
        appId: "6c899681-5231-4045-91e1-ec78a8c17472"
    });
    relayr.devices().getDeviceData({
        token: "gJg3n9mKzQF2vkev__WQ97y8XDM5qAQu",
        //deviceId: "3fd374db-fb11-4e2a-9403-9bbcb628e7bb",
        deviceId: "8b78365a-0d84-4cbe-a810-32bc96b15fc0",
        incomingData: function(data) {
            console.log("data from Accel/Gyro", data)
        }
    }).getDeviceData({
        token: "gJg3n9mKzQF2vkev__WQ97y8XDM5qAQu",
        deviceId: "5963c2de-7c36-4f14-ab4f-b32b70f835ff",
        incomingData: function(data) {
            console.log("data from Light/Prox", data)
        }
    }).getDeviceData({
        token: "gJg3n9mKzQF2vkev__WQ97y8XDM5qAQu",
        deviceId: "93917528-dc8f-4c65-96da-cbc8335e6d6b",
        incomingData: function(data) {
            console.log("data from Grove", data)
        }
    });
});
// APP ID / OAUTH CLIENT ID
// c0903091-4355-4d9d-b69a-8537b2c95b72
// OATH CLIENT SECRET
// 2wWfb5AqbxbsB1Sy_aAn89MS.zrH.oj-
// TOKEN
// px2ATx9vXXJ.Sgw58teFLpLF4FmahGR-