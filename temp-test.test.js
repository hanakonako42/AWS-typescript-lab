describe.each([
    {vpc1, flowlogs1, subnets1, routetables1, securityGroups1},
    {vpc2, flowlogs2, subnets2, routetables2, securityGroups2},
    {vpc3, flowlogs3, subnets3, routetables3, securityGroups3},
    {vpc4, flowlogs4, subnets4, routetables4, securityGroups4},
])("VPCに配置されているリソースをまとめてテストする", ({vpc1, subnets1, routetables1, securityGroups1}) => {
    beforeAll(
        // describeでは条件に合致する複数のリソースがオブジェクト配列で返ってくるためテストの前にソートする
        sortResourceByNameTag(subnets);
        sortResourceByNameTag(routeTables);
        sortResourceByNameTag(securityGroups);
        sortAscending(vpc.tag);
    );
    describe("VPCXに関するテスト", () => {
        test("vpcXと同じNameタグを持つVPCが存在しないこと", () => {
            // VPCIDが不明な状態でテストを開始するため最初だけNameタグで取得する
            expect(received.cidr).toBe(vpcX.cidr);
        })
        test("vpcXのサイダー範囲のテスト", () => {
            expect(received.cidr).toBe(vpcX.cidr);
        })
        test("タグの数", () => {
            expect(received.cidr).toBe(vpcX.cidr);
        }),
        test.each([//ここまでにソートが必要である。
            {Key: "Name", Value: "test-vpc"},
            {Key: "test", Value: "test"}
        ])("タグのテストを行う", () => {
            test("key: valueの一致確認")
        })
    }),
    describe.each(subnets1)("Subnetsに関するテスト", (subnet) => {
        beforeAll(
            sortAscending(subnet.tag);
        );
        test("subnetsの数一致", () => {
            expect(received.cidr).toBe(vpcX.cidr);
        }),
        test("タグの数", () => {
            expect(received.cidr).toBe(vpcX.cidr);
        }),
        test.each([
            {Key: "Name", Value: "test-vpc"},
            {Key: "test", Value: "test"}
        ])("タグのテストを行う", () => {
            test("key: valueの一致確認")
        })
    })
})
