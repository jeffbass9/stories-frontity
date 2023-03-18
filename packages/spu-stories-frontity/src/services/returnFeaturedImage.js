export default function returnFeaturedImage (post){
  let img_src = "";

  if(post._embedded['wp:featuredmedia']){
    const img_id = post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
  }

  return img_src;
}
