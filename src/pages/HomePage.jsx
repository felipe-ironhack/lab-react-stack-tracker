import { Link } from 'react-router-dom';

function HomePage({ companies }) {
	return (
		<div>
			<h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

			{companies.map((company) => (
				<Link key={company.id} to={`/company/${company.slug}`}>
					<div style={{ border: '1px solid black', margin: '.5rem auto', borderRadius: '8px' }}>
						<h6> {company.name}</h6>
						<img src={company.logo} width={50} />
					</div>
				</Link>
			))}
		</div>
	);
}

export default HomePage;
