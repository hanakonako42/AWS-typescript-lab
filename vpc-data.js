function generateVpc(env, account, code) {
    let vpcs = [];
    const COMMON_CONFIG = {
        common: "common-data",
        available: true
    };
    const ENV_SPECIFIC_CONFIG = {
        "dev": {
            spec: "t2.micro",
            KeyRetain: 7
        },
        "stg": {
            spec: "t3.micro",
            KeyRetain: 14
        },
        "prod": {
            spec: "t4.micro",
            KeyRetain: 14
        }
    };

    switch (account) {
        case "account1":
            vpcs = [
                {
                    vpc: {
                        name: "vpc-1",
                        test: "vpc-1",
                        test2: "test2",
                        common: "uwagaki test",
                    }
                }
            ];
            break;
        
        case "account2":
            vpcs = [
                {
                    vpc: {
                        name: "vpc-2",
                        test: "vpc-2",
                        test2: "test2"
                    }
                },
                {
                    vpc: {
                        name: "vpc-3",
                        test: "vpc-3",
                        test2: "test3"
                    }
                }
            ];
            break;
        
        case "account3":
            vpcs = [
                {
                    vpc: {
                        name: "vpc-4",
                        test: "vpc-4",
                        test2: "test4"
                    }
                }
            ];
            break;
        
        default:
            // FIX：エラーの時点で強制終了させる
            console.log(`account: ${account} is invalid.`)
            break;
    }

    for (let vpcObj of vpcs) {
        vpcObj.vpc = {
            ...COMMON_CONFIG,
            ...vpcObj.vpc,
            ...ENV_SPECIFIC_CONFIG[env]
        };
        vpcObj.subnets = generateSubnets(env, code, vpcObj.vpc.name);
        // 該当するものがないときは空文字か空配列を返すようにして、sdkのコードでも対応させる
        // vpcObj.routeTables = generaterouteTables(env, code, vpcObj.vpc.name);
        // vpcObj.securityGroups = generatesecurityGroups(env, code, vpcObj.vpc.name);
    };
    
    return vpcs;
}

function generateSubnets(env, account, vpc) {
    let subnets = [];
    const COMMON_CONFIG = {
        common: "subnet-common-data",
        available: true
    };
    const ENV_SPECIFIC_CONFIG = {
        "dev": {
            spec: "subnet-t2.micro",
            KeyRetain: 7
        },
        "stg": {
            spec: "subnet-t3.micro",
            KeyRetain: 14
        },
        "prod": {
            spec: "subnet-t4.micro",
            KeyRetain: 14
        }
    };

    switch (vpc) {
        case "vpc-1":
            subnets = [
                {
                    name: "account1-subnet-1",
                    test: "account1-subnet-1",
                    test2: "test2",
                    common: "testcommon"
                },
                {
                    name: "account1-subnet-2",
                    test: "account1-subnet-2",
                    test2: "test2",
                    common: "testcommon"
                },
                {
                    name: "account1-subnet-3",
                    test: "account1-subnet-3",
                    test2: "test2",
                    common: "testcommon"
                },
                {
                    name: "account1-subnet-4",
                    test: "account1-subnet-4",
                    test2: "test2",
                    common: "testcommon"
                },
            ];
            break;
        
        case "vpc-2":
            subnets = [
                {
                    name: "account2-subnet-1",
                    test: "account2-subnet-1",
                    test2: "test2",
                },
                {
                    name: "account2-subnet-2",
                    test: "account2-subnet-3",
                    test2: "test2",
                }
            ];
            break;
        
        case "vpc-3":
            subnets = [
                {
                    name: "account2-subnet-3",
                    test: "account2-subnet-3",
                    test2: "test2",
                    cidr: `test`

                },
                {
                    name: "account2-subnet-4",
                    test: "account2-subnet-4",
                    test2: "test2"
                }
            ]
            break;

        case "test4-vpc":
            subnets = [
                {
                    name: "test4-vpc-subnet1",
                    test: "test4-vpc-subnet1",
                    test2: "test2"
                },
                {
                    name: "test4-vpc-subnet2",
                    test: "test4-vpc-subnet2",
                    test2: "test2"
                }
            ]
            break; 

        default:
            console.log(`vpcName: ${vpc} is invalid.`)
            break;
    }

    subnets = subnets.map(subnet => ({
        ...COMMON_CONFIG,
        ...subnet,
        ...ENV_SPECIFIC_CONFIG[env]
    }));
    return subnets;
}

// const testData = generateVpc("prod", "xxx", "000000");
const testData = generateVpc("prod", "xxx", "000000");
// const testData = generateVpc("prod", "xxx", "000000");
console.log(JSON.stringify(testData, null, 2));
