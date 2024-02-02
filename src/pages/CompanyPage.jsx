import { Link, useParams } from 'react-router-dom';

function CompanyPage(props) {
	const { companySlug } = useParams();
	const { companies } = props;

	const companyFound = companies.find((company) => company.slug === companySlug);

	console.log(companyFound);
	return (
		<div>
			<h1>Company Profile</h1>
			{companyFound && (
				<div className='company-details'>
					<div className='header'>
						<img className='company-img' src={companyFound.logo} />

						<div className='company-info'>
							<h2>{companyFound.name}</h2>
							<h3>About</h3>
							<p>{companyFound.description}</p>
						</div>
					</div>

					<div className='tech-stack'>
						{companyFound.techStack.map((tech) => (
              <Link key={tech.slug} to={`/tech/${tech.slug}?companyName=${companyFound.slug}`}>
                <div className='tech-box' >
                  <img className='tech-image' src={tech.image} />

                  <h6>{tech.name}</h6>
                </div>
              </Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default CompanyPage;
