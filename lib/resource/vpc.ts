import { Construct } from 'constructs';
import { CfnVPC } from 'aws-cdk-lib/aws-ec2';

export class Vpc {
    public vpc: CfnVPC;

    public createResources(scope: Construct) {

        this.vpc = new CfnVPC(scope, 'Vpc', {
            cidrBlock: '10.0.0.0/16',
            tags: [{ key: 'Name', value: 'prod-123456-vpc' }]
        });
    }  
}
