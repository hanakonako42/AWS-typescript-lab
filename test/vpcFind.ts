import { EC2Client, DescribeVpcsCommand } from "@aws-sdk/client-ec2";

// VPC 名を指定してVPCが存在するか確認する関数
export async function checkVpcExists(vpcName: string): Promise<boolean> {
  const client = new EC2Client({
    region: "us-east-1", // 使用するリージョンに変更してください
  });

  try {
    // VPCの情報を取得するAPIコール
    const command = new DescribeVpcsCommand({});
    const data = await client.send(command);

    // VPCの名前（タグ）を確認
    const vpcs = data.Vpcs;
    if (vpcs) {
      for (const vpc of vpcs) {
        // VPCにタグがある場合、そのタグに指定した名前が含まれているか確認
        const tags = vpc.Tags;
        if (tags) {
          for (const tag of tags) {
            if (tag.Key === "Name" && tag.Value === vpcName) {
              return true; // 指定したVPC名が見つかった場合
            }
          }
        }
      }
    }

    // 指定した名前のVPCが見つからなかった場合
    return false;

  } catch (error) {
    console.error("Error checking VPC:", error);
    return false;
  }
}
