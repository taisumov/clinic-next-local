import {
	Close,
	Content,
	Overlay,
	Portal,
	Root,
	Trigger,
} from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { forwardRef, type ReactNode, type Ref } from 'react';

import cx from './index.module.scss';

interface DialogProps {
	className?: string;
	children: ReactNode;
	type?: 'Burger' | 'Modal';
}

type RefDivOrUndefined = Ref<HTMLDivElement> | undefined;

export const DialogContent = forwardRef(
	(
		{ children, type = 'Modal', ...props }: DialogProps,
		forwardedRef: RefDivOrUndefined
	) => (
		<Portal>
			<Overlay className={cx('Overlay')} />
			<Content {...props} ref={forwardedRef} className={cx('Content', type)}>
				{children}
				<Close asChild>
					<button className={cx('IconButton')} aria-label="Close">
						<Cross2Icon />
					</button>
				</Close>
			</Content>
		</Portal>
	)
);

DialogContent.displayName = 'DialogContent';

export const Dialog = Root;
export const DialogTrigger = Trigger;
