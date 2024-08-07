import React, { useState } from 'react';
import Container from '@/components/UI/Container';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();

	const handleSubmit = (el) => {
		el.preventDefault();
		router.push('/report');
	};

	return (
		<Container className=''>
			<form onSubmit={handleSubmit}>
				{/* FORM */}

				<button className='btn bg-primary font-medium mb-14' type='submit'>
					Submit
				</button>
			</form>
		</Container>
	);
}
