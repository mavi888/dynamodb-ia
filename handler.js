const AWS = require('aws-sdk');
let dynamo = new AWS.DynamoDB.DocumentClient();
const ULID = require('ulid');

const FIRST_TABLE_NAME = process.env.FIRST_TABLE_NAME;
const SECOND_TABLE_NAME = process.env.SECOND_TABLE_NAME;

exports.put = async (event) => {
    console.log('put function');

    const details = JSON.parse(event.body);
    console.log(details);

    var t = new Date();
    t.setSeconds(t.getSeconds() + 60);

    console.log(t);

    const item = {
        id: ULID.ulid(),
        details,
        ttl: Math.floor(t / 1000)
    }

    console.log(item);

    const savedItem = await saveItem(item, FIRST_TABLE_NAME);

    return {
        statusCode: 200,
        body: JSON.stringify(item),
        headers: {}
      }
}

exports.process = async (event) => {
    console.log('process function');

    console.log(event);
    
    let deletedItem = event.Records[0].dynamodb;
    console.log(deletedItem);

    deletedItem = deletedItem.OldImage

    const item = {
        id: ULID.ulid(),
        detail: deletedItem
    }

    console.log(item)

    await saveItem(item, SECOND_TABLE_NAME)

    return true
}

async function saveItem(item, tableName) {
    const params = {
        TableName: tableName,
        Item: item
    };

    console.log(params)

    return dynamo.put(params).promise().then(() => {
        return item;
  });
}