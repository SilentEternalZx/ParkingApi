import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

// Establece la conexión a MongoDB
const uri = 'mongodb+srv://julianrpm18:1234@cluster0.aquekrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connection = mongoose.createConnection(uri);

const AutoIncrement = AutoIncrementFactory(connection);

const ParkingSchema = new mongoose.Schema({
    cell_number: {
        type: Number,
        unique: true,
        required: [false, 'The cell number is required']
    },
    status: {
        type: String,
        default: 'Available',
        required: [true, 'The status is required']
    },
    vehicle_plate: {
        type: String,
        maxlength: [6, 'Maximum 6 characters'],
        default: null,
    },
    entry_date: {
        type: Date,
        default: null
    },
    exit_date: {
        type: Date,
        default: null
    },
    pin: {
        type: String,
        default: null
    },
});


// Aplicar el plugin de autoincremento
ParkingSchema.plugin(AutoIncrement, {inc_field : 'cell_number'});

export default connection.model('Cells', ParkingSchema, 'Cells');
