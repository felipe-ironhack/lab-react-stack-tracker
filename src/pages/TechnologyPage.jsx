import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

function TechnologyPage(props) {
	const { technologies } = props;

	const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const company = searchParams.get('companyName')
  console.log(company)

	const techFound = technologies.find((tech) => tech.slug === slug);

	return (
		<div>
			<h1>Technology Details</h1>

			{techFound && (
				<div className='company-details'>
					<div className='header'>
						<img className='company-img' src={techFound.image} />

						<div className='company-info'>
							<h2>{techFound.name}</h2>
							<h3>About</h3>
							<p>{techFound.description}</p>
						</div>
					</div>
				</div>
			)}
      <button onClick={() => navigate(`/company/${company}`)}>Back</button>
		</div>
	);
}

export default TechnologyPage;
