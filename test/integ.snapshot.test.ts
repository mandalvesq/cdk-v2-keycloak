import 'aws-cdk-lib/assert/jest';
import { SynthUtils } from 'aws-cdk-lib/assert';
import { IntegTesting } from '../src/integ.default';

test('integ snapshot validation', () => {
  const integ = new IntegTesting();
  integ.stack.forEach(stack => {
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
});
