const messages = [
    "Darwin",
    "Daniel",
    "Dardan",
    "David",
    "Diego",
    "Dante"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length )];
    console.log(message);
};

module.exports = { randomMsg };