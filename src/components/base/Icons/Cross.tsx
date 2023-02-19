import { Cross1Icon } from '@radix-ui/react-icons';

import cx from './index.module.scss';

interface CrossIconProps {
	prop?: string;
}

const CrossIcon = (props: CrossIconProps) => {
	const { prop } = props;

	return <Cross1Icon />;
};

export { CrossIcon };
