import React, { Component } from "react";
import AutoArbModal from "./AutoArbModal/AutoArbModal";
import "./mobicardfulldata.css";

class MobiCardFullData extends Component {

	constructor() {
		super()
		this.state = {
			showModal: false,
			autoarbregister: false,
		}
	} 

	changeAutoArbModalState = () => {
		let uid = localStorage.getItem('userid')
		if(uid) {
			this.setState({ 
				showModal: !this.state.showModal,
				autoarbregister: true
			}) 
		} else {
			this.setState({ 
				showModal: !this.state.showModal
			})
		}
	}

	render() {
		const { game } = this.props
		let bookieDataObj = game.arb_combination
		let arbsData = Object.keys(bookieDataObj)
		let oddsData = Object.values(bookieDataObj)
		let bookieNames = arbsData.slice(0, 3)
		bookieNames = bookieNames.map(name => name = name.split("_")[0])
		bookieNames = bookieNames.map(name => name = name[0].toUpperCase() + name.slice(1, ))
		let bookieOdds = oddsData.slice(0, 3)
		let uniqueBookies = new Set(bookieNames)

		let books = [game.book1, game.book2, game.book3]
		books = books.filter(i => i !== null)
		books = books.map(name => name = name[0].toUpperCase() + name.slice(1, ))

		const showGameData = (gameCount) => {
			switch(gameCount) {
				case 2:
					return ( <div>
								<div className="fulldata_body">
									<div className="fulldata_body_head">
										<p className="fulldata_book">{ books[0] }</p>
										<p className="fulldata_date">{ game.game_date }</p>
										<p className="fulldata_time">{ game.game_time }</p>
									</div>
									<div className="fulldata_body_body">
										<p className="fulldata_game">{ game.book1_game }</p>
										<p className="fulldata_data">{ `${game.sport} >> ${game.book1_country} >> ${game.book1_league}`}</p>
									</div>
								</div>	
								<div className="fulldata_body">
									<div className="fulldata_body_head">
										<p className="fulldata_book">{ books[1] }</p>
										<p className="fulldata_date">{ game.game_date }</p>
										<p className="fulldata_time">{ game.game_time }</p>
									</div>
									<div className="fulldata_body_body">
										<p className="fulldata_game">{ game.book2_game }</p>
										<p className="fulldata_data">{`${game.sport} >> ${game.book2_country} >> ${game.book2_league}`}</p>
									</div>
								</div>
							</div>
					)
				case 3:
					return (
							<div>
								<div className="fulldata_body">
											<div className="fulldata_body_head">
												<p className="fulldata_book">{ books[0] }</p>
												<p className="fulldata_date">{ game.game_date }</p>
												<p className="fulldata_time">{ game.game_time }</p>
											</div>
											<div className="fulldata_body_body">
												<p className="fulldata_game">{ game.book1_game }</p>
												<p className="fulldata_data">{ `${game.sport} >> ${game.book1_country} >> ${game.book1_league}`}</p>
											</div>
								</div>	
								<div className="fulldata_body">
											<div className="fulldata_body_head">
												<p className="fulldata_book">{ books[1] }</p>
												<p className="fulldata_date">{ game.game_date }</p>
												<p className="fulldata_time">{ game.game_time }</p>
											</div>
											<div className="fulldata_body_body">
												<p className="fulldata_game">{ game.book2_game }</p>
												<p className="fulldata_data">{ `${game.sport} >> ${game.book2_country} >> ${game.book2_league}`}</p>
											</div>
								</div>
								<div className="fulldata_body">
											<div className="fulldata_body_head">
												<p className="fulldata_book">{ books[2] }</p>
												<p className="fulldata_date">{ game.game_date }</p>
												<p className="fulldata_time">{ game.game_time }</p>
											</div>
											<div className="fulldata_body_body">
												<p className="fulldata_game">{ game.book3_game }</p>
												<p className="fulldata_data">{ `${game.sport} >> ${game.book3_country} >> ${game.book3_league}`}</p>
											</div>
								</div>	
							</div>	
					)
				default:
					case 0:
						return;
			}
		}

		return(
				<div className="mobicard_fulldata">
						<table>
							<thead>
								<tr className="fulldata_header">
									<th>{ game.market }</th>
									<th>{`${bookieNames[0]} @ ${bookieOdds[0]}`}</th>
									<th>{`${bookieNames[1]} @ ${bookieOdds[1]}`}</th>
									<th>{`${bookieNames[2]} @ ${bookieOdds[2]}`}</th>
								</tr>
							</thead>
						</table>
						{ showGameData(uniqueBookies.size) }
						<div id="auto_arb">
						 	<button onClick={this.changeAutoArbModalState}>stake split</button>
						 	<AutoArbModal  
						 		oddsA={`${bookieNames[0]} @ ${bookieOdds[0]}`}
						 		oddsB={`${bookieNames[1]} @ ${bookieOdds[1]}`} 
						 		oddsC={`${bookieNames[2]} @ ${bookieOdds[2]}`}
						 		gameName={game.game} 
						 		roi={game.arb_combination.roi} 
						 		closeAutoArbModal={this.changeAutoArbModalState} 
						 		showAutoArbModal={this.state.showModal}
						 		autoarbregister={this.state.autoarbregister}
						 		gameObj={game}
						 	/>
						 </div>
									
				</div>
		)
	}
}

export default MobiCardFullData;