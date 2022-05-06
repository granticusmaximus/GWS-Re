import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ma8shix1",
  dataset: "production",
  useCdn: true,
});