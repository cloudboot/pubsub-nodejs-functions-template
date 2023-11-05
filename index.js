import functions from '@google-cloud/functions-framework';

async function main(cloudEvent) {
    // The Pub/Sub message is passed as the CloudEvent's data payload.
    const base64name = cloudEvent.data.message.data;

    const name = base64name
        ? Buffer.from(base64name, 'base64').toString()
        : '';

    console.log(`It works ${name}!`);
}

functions.cloudEvent('main', main);
