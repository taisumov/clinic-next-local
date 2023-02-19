import Image, { type ImageProps } from 'next/image';

// export interface ImgProps extends ImageProps {
// 	image?: {
// 		data: {
// 			attributes: {
// 				url: string;
// 				alternativeText: string;
// 				width: number;
// 				height: number;
// 			};
// 		};
// 	};
// }

export const Img = (props: ImageProps) => (
	// const loader = () => {
	//   return getStrapiMedia(image)
	// }

	<Image {...props} />
);
