import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "hellno.eth-liquilock.vercel.app",
        timestamp: 1737378834,
        expirationTime: 1745154834
      },
      signature: "9844ec2db885eb8a985f2eaa4dcd64275ccc4d339ec292f7bd89dd827c68316a17f205c6f592cda010ef229a7b0d5e3cfd275dd123be88dfcfeccdf3e63491421c",
      signingKey: "17628ec2518cf311ba29f10b3ae523d86e9efdb30211ed0978cf6769cbd36b15"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
