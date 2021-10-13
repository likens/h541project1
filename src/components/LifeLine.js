import React, { Component } from "react";
import LifeLineHardware from "./LifeLineHardware";
import "../assets/css/LifeLine.css";

class LifeLine extends Component {
	constructor() {
		super();
		this.state = {
			...this.state
		};
	}

	render() {
		return (
			<div className="lifeline">
				<LifeLineHardware />
				<br />
				TODO ---
				<ul>
					<li>
						System
						<ul>
							<li>
								Design
								<ul>
									<li>Colors</li>
									<li>Spacing</li>
									<li>Animations</li>
									<li>Feels</li>
								</ul>
							</li>
							<li>
								Menus/Nav
								<ul>
									<li><s>Finish Nav Buttons</s></li>
									<li><s>Finish Submenus</s></li>
									<li><s>Hook Up Modals</s></li>
								</ul>
							</li>
							<li>
								Notifications
								<ul>
									<li>Icons</li>
									<li>Messages</li>
									<li>Clear Button</li>
									<li>Button To Launch Different Notifications</li>
								</ul>
							</li>
							<li>
								Modals
								<ul>
									<li><s>Confirm/Cancel Button</s></li>
									<li><s>Close Button</s></li>
									<li><s>Header/Body</s></li>
								</ul>
							</li>
							<li>
								Forms
								<ul>
									<li>Checkbox</li>
									<li>Radio Button</li>
									<li>Textbox</li>
									<li>Dropdown Box</li>
									<li>Simple Button</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						Applications
						<ul>
							<li>
								Dashboard
								<ul>
									<li>4 Sections</li>
									<li>Snapshot Button</li>
									<li>Other stuff?</li>
								</ul>
							</li>
							<li>
								Blood Pressure
								<ul>
									<li>Start & Stop Measurement Button with Animations</li>
									<li>Heart Rate "updates" with historical chart</li>
								</ul>
							</li>
							<li>
								Oxygen Saturation
								<ul>
									<li>Animations</li>
								</ul>
							</li>
							<li>
								Blood Pressure
								<ul>
									<li>Animations</li>
								</ul>
							</li>
							<li>
								Heart Rate
								<ul>
									<li>Start/Stop</li>
									<li>History</li>
									<li>Animations</li>
								</ul>
							</li>
							<li>
								Medications
								<ul>
									<li>Calendar</li>
									<li>Streak</li>
									<li>Medication Info</li>
									<li>Other stuff?</li>
								</ul>
							</li>
							<li>
								Physical Therapy
								<ul>
									<li>Calendar</li>
									<li>Streak</li>
									<li>PT Info</li>
									<li>Other stuff?</li>
								</ul>
							</li>
							<li>
								Alarms
								<ul>
									<li>ADD_SOMETHING</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						Nice Stuff
						<ul>
							<li>3D Hardware</li>
							<li>Splash Animations</li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default LifeLine;