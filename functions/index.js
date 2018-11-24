const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const app = express();

admin.initializeApp(functions.config().firebase)
admin.firestore().settings({ timestampsInSnapshots: true });

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

function noftifications (noftification) {
    return admin.firestore().collection('noftifications').add(noftification).then((doc)=> {
        console.log('noftification added', doc);
        
    })
}

exports.projectCreate = functions.firestore
    .document('project/{projectId}')
    .onCreate(doc=>{
        const project  = doc.data();
        const noftification = {
            content: 'Added a new project',
            user: project.author,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return noftifications(noftification)
    })


// exports.userJoined = functions.firestore.document('users').onCreate((snap, context) => {
//     const user = snap.data();
//     const displayName = `${user.firstName} + ${user.lastName}`;   
//     console.log(user, 'user');
     
//     const noftification = {
//         content: 'New user join our project',
//         user: displayName ,
//         time: admin.firestore.FieldValue.serverTimestamp()
//     }
//         return noftifications(noftification)
// })
exports.newUserJoin = functions.firestore.document('users/{userID}').onCreate((snap, context) => {
    const user = snap.data();
    const displayName = `${user.firstName} ${user.lastName}`;   
    console.log(user, 'user');
     
    const noftification = {
        content: 'New user join our project',
        user: displayName ,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return noftifications(noftification)
})

// app.get('/:id', (req, res) => {
//     res.send(Widgets.getById(req.params.id));
//     const uid = req.params.id;
//     console.log(uid, 'uid');
    
//     admin.auth().getUser(uid)
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully fetched user data:", userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log("Error fetching user data:", error);
//   });
// });


// // Expose Express API as a single Cloud Function:
// exports.widgets = functions.https.onRequest(app);


// exports.newUer = functions.https.onRequest((req, res) => {
    
//   });