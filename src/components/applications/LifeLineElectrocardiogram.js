import React, { Component } from "react";
import ekgHR from "../../assets/img/ekg-hr.svg";
import "../../assets/css/Electrocardiogram.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class LifeLineElectrocardiogram extends Component {

	constructor() {
		super();
		this.state = {
			...this.state
		}
	}

	render() {
		return (
			<div className="ekg">

				<div className="graph graph--hr">
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="heartbeat">
						<FontAwesomeIcon size={"lg"} icon={faHeart} />
					</div>
				</div>

				<div className="graph graph--o2">
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
				</div>

				<div className="graph graph--rp">
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
				</div>

			</div>
		);
	}
}

export default LifeLineElectrocardiogram;