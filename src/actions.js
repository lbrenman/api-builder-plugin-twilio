const util = require('util');
// Note that user must set the TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN env vars in their main API Builder project

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMSAsync = util.promisify(client.messages.create)
    .bind(client.messages);

/**
 * Action method.
 *
 * @param {object} params - A map of all the parameters passed from the flow.
 * @param {object} options - The additional options provided from the flow
 *	 engine.
 * @param {object} options.pluginConfig - The service configuration for this
 *	 plugin from API Builder config.pluginConfig['api-builder-plugin-pluginName']
 * @param {object} options.logger - The API Builder logger which can be used
 *	 to log messages to the console. When run in unit-tests, the messages are
 *	 not logged.  If you wish to test logging, you will need to create a
 *	 mocked logger (e.g. using `simple-mock`) and override in
 *	 `MockRuntime.loadPlugin`.  For more information about the logger, see:
 *	 https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/logging.html
 * @param {*} [options.pluginContext] - The data provided by passing the
 *	 context to `sdk.load(file, actions, { pluginContext })` in `getPlugin`
 *	 in `index.js`.
 * @return {*} The response value (resolves to "next" output, or if the method
 *	 does not define "next", the first defined output).
 */

 async function sendSMS(params, options) {
     const { body, to, from } = params;
     const { logger } = options;

     console.log('sendSMS() called');

     if (!body) {
         throw new Error('Missing required parameter: body');
     }

     if (!to) {
         throw new Error('Missing required parameter: to');
     }

     if (!from) {
         throw new Error('Missing required parameter: from');
     }

     return sendSMSAsync({
        body: body,
        from: from,
        to: to
      })

 }

module.exports = {
	sendSMS
};
