import React from 'react';
import { useState, useEffect } from 'react';

export default function FlashLight() {
	const useMousePosition = () => {
		const [position, setPosition] = useState({
			clientX: 0,
			clientY: 0,
		});

		const updatePosition = (event) => {
			const { pageX, pageY, clientX, clientY } = event;

			setPosition({
				clientX,
				clientY,
			});
		};

		useEffect(() => {
			document.addEventListener('mousemove', updatePosition, false);
			document.addEventListener('mouseenter', updatePosition, false);

			return () => {
				document.removeEventListener('mousemove', updatePosition);
				document.removeEventListener('mouseenter', updatePosition);
			};
		}, []);

		return position;
	};

	const Cursor = () => {
		const { clientX, clientY } = useMousePosition();

		return (
			<div
				style={{
					position: 'fixed',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 9999,
					pointerEvents: 'none',
				}}
			>
				
					<svg
						width={300}
						height={300}
						viewBox='0 0 50 50'
						style={{
							position: 'absolute',
							left: clientX,
							top: clientY,
							transform: 'translate(-50%, -50%)',
            }}
        >
          <g color='#ECEFF1'>
						<filter id='blur'>
							<feGaussianBlur stdDeviation='.5' />
						</filter>
            <circle cx='25' cy='25' r='8' filter='url(#blur)' stroke='currentcolor' fill='none' />
          </g>
					</svg>
				
			</div>
		);
	};

	return <Cursor />;
}
