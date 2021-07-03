# API Builder Plugin for Twilio

[**Axway API Builder**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder.html) flow-node that implements [**Twilio**](https://www.twilio.com/go) cloud communication platform methods (e.g. SMS): *api-builder-plugin-twilio*

Methods implemented:

* messages.create()

## About flow-nodes

Flow-nodes are used within Axway API Builder's flow editor that is a low-code / no-code solution to designing and developing services
that integrate to many different connected components, such as databases and APIs.

## Install

After creating your [**API Builder Project**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_getting_started_guide.html), you can install this plugin using npm:

```
npm install api-builder-plugin-twilio
```

> Note that this command will install from npm. If you want to install locally, then provide the full path to the plugin folder

Before launching your API Builder app that uses this plugin, you must set the following two environment variables as per your Twilio account:

* TWILIO_ACCOUNT_SID
* TWILIO_AUTH_TOKEN

## Use

Find the plugin in the Messaging group in the Flow-Nodes panel. Drag onto the canvas and select the desired method and provide the input and wire up to the rest of your flow as shown below:

![]([Imgur](https://i.imgur.com/LyoPuKP.png))

## Methods

The currently implemented methods are described below.

### messages.create()

Twilio docs are [**here**](https://www.twilio.com/docs/sms/send-messages)

Provide the *to* and *from* phone numbers and the SMS message *body() as input and the output will be similar to below:

* from =  '+15017122661'
* to = '+15558675310'
* body = 'Hi there'

```
{
  "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "api_version": "2010-04-01",
  "body": "Hi there",
  "date_created": "Thu, 30 Jul 2015 20:12:31 +0000",
  "date_sent": "Thu, 30 Jul 2015 20:12:33 +0000",
  "date_updated": "Thu, 30 Jul 2015 20:12:33 +0000",
  "direction": "outbound-api",
  "error_code": null,
  "error_message": null,
  "from": "+14155552345",
  "messaging_service_sid": null,
  "num_media": "0",
  "num_segments": "1",
  "price": null,
  "price_unit": null,
  "sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "status": "sent",
  "subresource_uris": {
    "media": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json"
  },
  "to": "+14155552345",
  "uri": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json"
}
```
