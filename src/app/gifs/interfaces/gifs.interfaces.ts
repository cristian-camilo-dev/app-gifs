export interface SearchResponse {
  data: GifData[];
  meta: MetaData;
  pagination: PaginationData;
}

export interface GifData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: ImageVariants;
  user: UserData;
  analytics_response_payload: string;
  analytics: AnalyticsData;
  alt_text: string;
}

export interface ImageVariants {
  original: OriginalImage;
  downsized: DownsizedImage;
  downsized_large: DownsizedLargeImage;
  downsized_medium: DownsizedMediumImage;
  downsized_small: DownsizedSmallImage;
  downsized_still: DownsizedStillImage;
  fixed_height: FixedHeightImage;
  fixed_height_downsampled: FixedHeightDownsampledImage;
  fixed_height_small: FixedHeightSmallImage;
  fixed_height_small_still: FixedHeightSmallStillImage;
  fixed_height_still: FixedHeightStillImage;
  fixed_width: FixedWidthImage;
  fixed_width_downsampled: FixedWidthDownsampledImage;
  fixed_width_small: FixedWidthSmallImage;
  fixed_width_small_still: FixedWidthSmallStillImage;
  fixed_width_still: FixedWidthStillImage;
  looping: LoopingImage;
  original_still: OriginalStillImage;
  original_mp4: OriginalMp4Image;
  preview: PreviewImage;
  preview_gif: PreviewGifImage;
  preview_webp: PreviewWebpImage;
  hd?: HdImage;
  '480w_still': N480wStillImage;
}

export interface OriginalImage {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface DownsizedImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface DownsizedLargeImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface DownsizedMediumImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface DownsizedSmallImage {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface DownsizedStillImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface FixedHeightImage {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface FixedHeightDownsampledImage {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

export interface FixedHeightSmallImage {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface FixedHeightSmallStillImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface FixedHeightStillImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface FixedWidthImage {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface FixedWidthDownsampledImage {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

export interface FixedWidthSmallImage {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface FixedWidthSmallStillImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface FixedWidthStillImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface LoopingImage {
  mp4_size: string;
  mp4: string;
}

export interface OriginalStillImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface OriginalMp4Image {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface PreviewImage {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface PreviewGifImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface PreviewWebpImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface HdImage {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface N480wStillImage {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface UserData {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface AnalyticsData {
  onload: OnloadAnalytics;
  onclick: OnclickAnalytics;
  onsent: OnsentAnalytics;
}

export interface OnloadAnalytics {
  url: string;
}

export interface OnclickAnalytics {
  url: string;
}

export interface OnsentAnalytics {
  url: string;
}

export interface MetaData {
  status: number;
  msg: string;
  response_id: string;
}

export interface PaginationData {
  total_count: number;
  count: number;
  offset: number;
}
