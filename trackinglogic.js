// ১. রাইডারের লোকেশন আপডেট (Driver App থেকে সার্ভারে যাবে)
function updateDriverLocation(driverId, newLat, newLng) {
    socket.emit('updateLocation', {
        driverId: driverId,
        lat: newLat,
        lng: newLng
    });
}

// ২. ইউজারের ম্যাপে বাইক নড়াচড়া করা (User App)
socket.on('driverLocationUpdate', (data) => {
    // আগের বাইকের মার্কার রিমুভ করে নতুন পজিশনে বসানো
    if (bikeMarker) {
        bikeMarker.setLatLng([data.lat, data.lng]);
    } else {
        var bikeIcon = L.icon({
            iconUrl: 'bike-icon.png', // আপনার বাইক আইকন ইমেজ
            iconSize: [40, 40]
        });
        bikeMarker = L.marker([data.lat, data.lng], {icon: bikeIcon}).addTo(map);
    }
});
