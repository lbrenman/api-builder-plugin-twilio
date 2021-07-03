const { expect } = require('chai');
const { MockRuntime } = require('@axway/api-builder-test-utils');
const getPlugin = require('../src');

describe('flow-node twilio', () => {
	let plugin;
	let flowNode;
	beforeEach(async () => {
		plugin = await MockRuntime.loadPlugin(getPlugin);
		plugin.setOptions({ validateOutputs: true });
		flowNode = plugin.getFlowNode('twilio');
	});

	describe('#constructor', () => {
		it('should define flow-nodes', () => {
			expect(plugin).to.be.a('object');
			expect(plugin.getFlowNodeIds()).to.deep.equal([
				'twilio'
			]);
			expect(flowNode).to.be.a('object');

			// Ensure the flow-node matches the spec
			expect(flowNode.name).to.equal('Twilio');
			expect(flowNode.description).to.equal('Flow-node to send SMS messages.');
			expect(flowNode.icon).to.be.a('string');
			expect(flowNode.getMethods()).to.deep.equal([
				'sendSMS'
			]);
		});

		// It is vital to ensure that the generated node flow-nodes are valid
		// for use in API Builder. Your unit tests should always include this
		// validation to avoid potential issues when API Builder loads your
		// node.
		it('should define valid flow-nodes', () => {
			// if this is invalid, it will throw and fail
			plugin.validate();
		});
	});

	describe('#sendSMS', () => {
		it('should error when missing required parameter', async () => {
			// Invoke #hello with a non-number and check error.
			const { value, output } = await flowNode.sendSMS({
				body: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: body');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.sendSMS({ body: 'Test', from: '+19785793281', to: '+16176428274'});

			expect(value.body).to.equal('Test');
			expect(output).to.equal('next');
		});
	});
});
