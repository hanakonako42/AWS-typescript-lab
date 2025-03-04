import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Vpc } from './resource/vpc';

export class AwsTypescriptLabStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create vpc
    const vpc = new Vpc();
    vpc.createResources(this);
  };
}
