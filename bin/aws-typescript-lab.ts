#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsTypescriptLabStack } from '../lib/aws-typescript-lab-stack';

const app = new cdk.App();
new AwsTypescriptLabStack(app, 'AwsTypescriptLabStack', {
    // env: { region: 'ap-northeast-1' }
});
