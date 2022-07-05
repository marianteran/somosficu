const Events = require("../models/events")

const eventsController = {
    updateEvents: async (req, res) => {
        try {
            const updatedEvents = await Events.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).json(updatedEvents);
        } catch (err) {
            console.log(err)
        }
    },
    deleteEvents: async (req, res) => {
        try {
            await Events.findByIdAndDelete(req.params.id);
            res.status(200).json("Events has been deleted.");
        } catch (err) {
            console.log(err)
        }
    },
    getEvent: async (req, res) => {
        try {
            const evento = await Events.findById(req.params.id);
            res.status(200).json(evento);
        } catch (err) {
            console.log(err)
        }
    },
    getEvents: async (req, res) => {
        try {
            const eventos = await Events.find();
            res.status(200).json(eventos);
        } catch (err) {
            console.log(err)
        }
    },

    CreateEvent: async (req, res) => {
        const newEvent = new Events(req.body)
        try {
            const savedEvent = await newEvent.save()
            res.status(200).json(savedEvent)

        } catch (err) {
            res.status(500).json(err)

        }
    },






}

module.exports = eventsController