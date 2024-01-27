import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

function TechnologyPage({ technologies }) {
	const { slug } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()

	const tech = technologies.find((tech) => tech.slug === slug);
  const company = searchParams.get('companyName')
 
	return (
		<div>
			<h1>Technology Details</h1>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<img src={tech.image} width={80} />
					<div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
						<h4>{tech.name} </h4>
						<h6>About</h6>
						<p> {tech.description}</p>
					</div>
				</div>
			</div>

      <button onClick={() => navigate(`/company/${company}`)}>Back</button>
		</div>
	);
}

export default TechnologyPage;
