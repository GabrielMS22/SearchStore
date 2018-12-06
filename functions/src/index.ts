import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

functions.firestore
    .document('Customers')
    .onCreate( event => {

        console.log('ey')

        // Notification content
        const payload = {
            notification: {
                title: 'New Subscriber',
                body: ` is following your content!`,
                icon: 'https://goo.gl/Fz9nrQ'
            }
        }

      
        let tokens = 'd3ya_KiXoXo:APA91bEN0dD6dqFY4G8H5u9oiqtY8ruOL3dVLDtoSSOOtIRaXvpKe1jDTpn7rRpT9T2PoGW1SSv3ggwOeE7HG6-5FTWfcxTmGXIaLvlYjBpvgX9UKLPVxTwCtV2eN2AS7rSHBVaN25Z3';
        admin.messaging().sendToDevice(tokens, payload)

    });