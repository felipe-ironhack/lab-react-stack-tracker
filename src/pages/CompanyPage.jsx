import { Link, useParams } from 'react-router-dom';

function CompanyPage({ companies }) {
	const { companySlug } = useParams();

	const companyFound = companies.find((company) => company.slug === companySlug);

	return (
		<div>
			<h1>Company Profile</h1>

			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<img src={companyFound.logo} width={80} />
					<div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
						<h4>{companyFound.name} </h4>
						<h6>About</h6>
						<p> {companyFound.description}</p>
					</div>
				</div>
			</div>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexWrap: 'wrap',
					gap: '.5rem',
				}}
			>
				{companyFound.techStack.map((tech) => {
					return (
						<Link to={`/tech/${tech.slug}?companyName=${companyFound.slug}`} key={tech.name}>
							<img src={tech.image} width={30} style={{border: '1px solid black', borderRadius: '8px', padding: '1rem'}} />

							<p>{tech.name}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default CompanyPage;
