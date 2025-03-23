export const ProgressBar = ({
	label,
	value,
	color = 'bg-slate-200',
	type = 'bar',
}) => {
	const getColorFromClass = className => {
		const colorMap = {
			'bg-rose-200': '#fecdd3',
			'bg-sky-200': '#bae6fd',
			'bg-amber-200': '#fde68a',
			'bg-teal-200': '#99f6e4',
			'bg-emerald-200': '#a7f3d0',
			'bg-violet-200': '#ddd6fe',
			'bg-slate-200': '#e2e8f0',
		};
		return colorMap[className] || '#e2e8f0';
	};

	const renderBar = () => (
		<div className='w-full bg-slate-100 rounded-full h-2.5'>
			<div
				className={`${color} h-2.5 rounded-full transition-all duration-300 ease-in-out`}
				style={{ width: `${value}%` }}
			/>
		</div>
	);

	const renderCircle = () => (
		<div className='relative w-20 h-20 mx-auto'>
			<svg className='w-full h-full rotate-[-90deg]' viewBox='0 0 36 36'>
				<path
					d='M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831'
					fill='none'
					stroke='#f1f5f9'
					strokeWidth='3'
				/>
				<path
					d='M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831'
					fill='none'
					stroke={getColorFromClass(color)}
					strokeWidth='3'
					strokeDasharray={`${value}, 100`}
					className='transition-all duration-300 ease-in-out'
				/>
				<text
					x='18'
					y='19'
					className='fill-slate-600'
					dominantBaseline='middle'
					textAnchor='middle'
					transform='rotate(90 18 18)'
					style={{ fontSize: '10px' }}>
					{value}%
				</text>
			</svg>
		</div>
	);

	return (
		<div className='w-full flex flex-col items-center'>
			<div
				className={`flex ${
					type === 'circle' ? 'justify-center' : 'justify-between'
				} items-center mb-1 w-full`}>
				<span className='text-slate-600 font-medium'>{label}</span>
				{type === 'bar' && (
					<span className='text-slate-500'>{value}%</span>
				)}
			</div>
			{type === 'bar' ? renderBar() : renderCircle()}
		</div>
	);
};
