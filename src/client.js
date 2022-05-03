import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ggq7tjw4",
  dataset: "production",
  apiVersion: '2021-08-31',
  useCdn: true,
});