// ১. ভাড়া ক্যালকুলেশন লজিক (কিলোমিটার অনুযায়ী)
function calculateFare(distanceInKm, vehicleType) {
    const baseFare = {
        'bike': 30, // বেস ফেয়ার ৩০ টাকা
        'car': 80   // বেস ফেয়ার ৮০ টাকা
    };
    
    const perKmRate = {
        'bike': 12, // প্রতি কিমি ১২ টাকা
        'car': 25   // প্রতি কিমি ২৫ টাকা
    };

    let total = baseFare[vehicleType] + (distanceInKm * perKmRate[vehicleType]);
    return total.toFixed(2);
}

// ২. রাইডার খোঁজার সিমুলেশন (Socket.io ব্যবহার করে)
// যখন ইউজার রিকোয়েস্ট করবে:
io.on('connection', (socket) => {
    socket.on('requestRide', (data) => {
        console.log(`ইউজার ${data.userId} রাইড খুঁজছেন...`);
        
        // এখানে সার্ভার তার ডেটাবেস থেকে আশেপাশে থাকা রাইডারদের লিস্ট নেবে
        // ধরি, ১ কিমি এর মধ্যে ৩ জন রাইডার আছে
        const nearbyDrivers = ["Driver_ID_101", "Driver_ID_102", "Driver_ID_103"];
        
        // সব রাইডারকে নোটিফিকেশন পাঠানো
        nearbyDrivers.forEach(driverId => {
            io.to(driverId).emit('newRideRequest', {
                pickup: data.pickup,
                destination: data.destination,
                fare: calculateFare(data.distance, 'bike')
            });
        });
    });

    // ৩. রাইডার যখন রিকোয়েস্ট একসেপ্ট করবে
    socket.on('acceptRide', (data) => {
        // ইউজারকে জানিয়ে দেওয়া যে রাইডার পাওয়া গেছে
        io.to(data.userId).emit('rideAccepted', {
            driverName: "Rahim Uddin",
            bikeNumber: "Dhaka Metro-HA-1234",
            driverLocation: { lat: 23.81, lng: 90.41 }
        });
    });
});
