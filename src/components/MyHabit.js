// import { ReactComponent as DeleteHabitButton } from "../../assets/imgs/delete.svg"

import styled from "styled-components"

export default function MyHabit({
	habitData: { name, days, id },
}) {
	const daysList = [
		{ dayName: "D", dayIndex: 0 },
		{ dayName: "S", dayIndex: 1 },
		{ dayName: "T", dayIndex: 2 },
		{ dayName: "Q", dayIndex: 3 },
		{ dayName: "Q", dayIndex: 4 },
		{ dayName: "S", dayIndex: 5 },
		{ dayName: "S", dayIndex: 6 },
	]
	return (
		<MyHabito>
			<h1>{name}</h1>
			<div className="daysWeek">
				{daysList.map(({ dayName, dayIndex }, index) => {
					return (
						<div
							key={index}
							className={`day ${
								days.includes(dayIndex) ? "selected" : ""
							}`}>
							{dayName}
						</div>
					)
				})}
			</div>
			<button>
				{/* <DeleteHabitButton /> */}
			</button>
		</MyHabito>
	)
}


const MyHabito = styled.div`
margin-top: 10px;
margin-right: 40px;
	width: 340px;
	height: 91px;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	border-radius: 5px;
	padding: 13px 15px;
	h1 {
		font-size: 19.976px;
		line-height: 25px;
		color: #666666;
	}
	.daysWeek {
		display: flex;
		margin-top: 8px;
		font-size: 19.976px;
		line-height: 25px;
		color: #dbdbdb;
		.day {
			width: 30px;
			height: 30px;
			border: 1px solid #d5d5d5;
			border-radius: 5px;
			text-align: center;
			margin-right: 4px;
		}
		.selected {
			color: #fff;
			background: #cfcfcf;
		}
	}
	button {
		position: absolute;
		top: 11px;
		right: 10px;
		background: transparent;
	}
`;