import { BrowserRouter as Router } from 'react-router-dom'
import PortfolioItem from './portfolioItem'

function MyWork(props){
    
    const {title, professional, academic} = props.name
    return (
        <section className="my-work" id="work">
			<h2 className="section-title section-title-work">{title}</h2>
			<p className="section-subtitle section-subtitle-work">
				<u>{professional.title}</u>
			</p>
			<div className="portfolio">
				<Router>
                	{professional.projects.map( (portfolioItem, id) => <PortfolioItem key={id} name= {portfolioItem}/>) }
				</Router>
			</div>
			<br /><br />
			<p className="section-subtitle section-subtitle-work">
				<u>{academic.title}</u>
			</p>
			<div className="portfolio">
            <div className="portfolio">
				<Router>
					{academic.projects.map( (portfolioItem, id) => <PortfolioItem key={id} name= {portfolioItem}/>) }
				</Router>
			</div>
			</div>
		</section>
    );
    
}
export default MyWork;