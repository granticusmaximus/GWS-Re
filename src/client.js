import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ggq7tjw4",
  dataset: "production",
  useCdn: true,
});