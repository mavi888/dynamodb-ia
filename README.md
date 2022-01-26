# DYNAMODB STANDARD-IA TABLE CLASS DEMO

_Infrastructure as code framework used_: AWS SAM
_AWS Services used_: AWS Lambda, DynamoDB, DynamoDB streams

## Summary of the demo

In this demo you will see:

- How to configure a Lambda function that puts elements in a DynamoDB table.
- How to configure a DynamoDB table with TTL and DynamoDB streams
- How to trigger a Lambda function from DynamoDB streams using Event Source Filtering
- How to configure a DynamoDB table with new table class DynamoDB IA Standard

This demo is part of a video posted in FooBar Serverless channel. You can check the video to see the whole demo.

## Deploy this demo

We will be using AWS SAM and make sure you are running the latest version - at the time of writing, this was 1.37.0 (sam --version).

Deploy the project to the cloud:

```
sam deploy -g # Guided deployments
```

When asked about functions that may not have authorization defined, answer (y)es. The access to those functions will be open to anyone, so keep the app deployed only for the time you need this demo running.

Next times, when you update the code, you can build and deploy with:

```
sam deploy
```

To delete the app:

```
sam delete
```

## Links related to this code

- Video with more details: https://youtu.be/yJ11j6ed_YY
- Launch blog post: https://aws.amazon.com/blogs/aws/new-dynamodb-table-class-save-up-to-60-in-your-dynamodb-costs/
