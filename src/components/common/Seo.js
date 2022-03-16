import Head from "next/head";

function Seo({
  title = "",
  keywords = "",
  desc = "",
  ogUrl = "",
  ogTitle = "",
  ogImage = "",
  ogDesc = "",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={desc} />
      <meta property="og:type" content="webstie" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={ogDesc} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
    </Head>
  );
}

export default Seo;
