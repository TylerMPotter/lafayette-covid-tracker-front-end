const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {createTransporter, sendEmail} = require("./email");
const { WELCOME_EMAIL } = require("./email/constants");

admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://lafayette-covid-tracker.web.app/',
});
const FIRESTORE = admin.firestore();
const transporter = createTransporter()

const fs = require('fs');
const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
if (fs.existsSync('.env.local')) {
    const envConfig = dotenv.parse(fs.readFileSync('.env.local'));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
}

console.log(process.env);

/**
 * Listens to the firestore for when a user is created from our front end
 * and sends a welcome email to the users email
 * @type {CloudFunction<QueryDocumentSnapshot>}
 */
exports.createUser = functions.firestore
    .document('users/{userId}')
    .onCreate(async (snap, context) => {
        const email = snap.data()['email'];
        sendEmail(transporter,
            email,
            WELCOME_EMAIL.from,
            WELCOME_EMAIL.replyTo,
            WELCOME_EMAIL.subject,
            WELCOME_EMAIL.body
        );

    });

/**
 * On a schedule of 5 minutes, accesses the lafayette covid page and looks for any update
 * then if there's an update sends an email notification to the users
 * @type {CloudFunction<unknown>}
 */
exports.scheduledFunction = functions.pubsub
    .schedule('every 5 minutes')
    .onRun((context) => {
        console.log('This will be run every 5 minutes!');

        const data = 40;

        if (data === 39) {
            getEmailList().then((userEmails) => {
                userEmails.forEach((email) => {
                    sendEmail(transporter,
                        email,
                        WELCOME_EMAIL.from,
                        WELCOME_EMAIL.replyTo,
                        WELCOME_EMAIL.subject,
                        WELCOME_EMAIL.body
                    );
                });
            });
        }

        return null;
    });

/**
 * Helper function which querys firestore for all the data in the collection users, and for
 * each user gets the email then returns an array. Use this to send an email to all users
 * who are registered when there's an update
 * @returns {Promise<*[]>}
 */
const getEmailList = async () => {
    const querySnapshot = await FIRESTORE.collection('users').get();
    if (querySnapshot.empty) {
        return [];
    } else {
        const userEmails = [];
        const sourceEmails = querySnapshot.docs;
        sourceEmails.forEach((doc) => {
            userEmails.push(doc.data()['email']);
        });
        return userEmails;
    }
};
