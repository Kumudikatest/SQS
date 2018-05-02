let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/TestSQS',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block
			console.log("message");
			console.log(message);
		})
	}, function (error) {
		console.log("message error");
		// implement error handling logic here
	});


	callback(null, 'Successfully executed');
}