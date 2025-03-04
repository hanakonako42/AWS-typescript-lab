import { checkVpcExists } from './vpcFind'

describe("checkVpcExists", () => {
  it("should return true if the VPC with the specified name exists", async () => {
    const result = await checkVpcExists("prod-123456-vpc");
    expect(result).toBe(true);
  });
});
