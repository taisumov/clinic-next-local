import Image, { type ImageProps } from 'next/image';

export const BgImage = ({ src, alt, className }: ImageProps) => (
	<Image
		className={className}
		alt={alt ?? ''}
		src={src}
		placeholder="blur"
		quality={100}
		fill
		sizes="100vw"
		style={{
			objectFit: 'cover',
			pointerEvents: 'none',
		}}
	/>
);
