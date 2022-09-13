import mongoose from 'mongoose'

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConn = {
    isConnected: 0
}

export const connect = async() => {

    if ( mongoConn.isConnected === 1) {
        console.log('Already connected');
        return
    }

    if ( mongoose.connections.length > 0) {
        mongoConn.isConnected = mongoose.connections[0].readyState

        if ( mongoConn.isConnected === 1 ) {
            console.log('Using previous connection');
            return
        }

        await mongoose.disconnect()
    }

    await mongoose.connect(process.env.MONGO_URL || '')
    mongoConn.isConnected = 1
    console.log('Connecting to MongoDB:', process.env.MONGO_URL);
    
}

export const disconnect = async() => {

    if (process.env.NODE_ENV === 'development') return

    if ( mongoConn.isConnected === 0) return

    await mongoose.disconnect()
    console.log('Disconnecting from Mongodb');
    
}