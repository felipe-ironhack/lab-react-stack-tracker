import { Link } from "react-router-dom";

function HomePage(props) {
  const { companies } = props

  console.log(companies)

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies-list">
      {companies && companies.map(company => (
        <Link key={company.id} to={`/company/${company.slug}`} >
          <div  className="company-card">
            <h6>{company.name}</h6>
            <img src={company.logo} width={30} />
          </div>
        </Link>
      ))}

      </div>
    </div>
  );
}

export default HomePage;
