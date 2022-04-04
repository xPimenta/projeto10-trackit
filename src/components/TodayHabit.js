import styled from "styled-components";
import { ReactComponent as HabitCheckButton } from "../assets/check.svg"

export default function TodayHabit({
	habitData: { id, name, done, currentSequence, highestSequence },
	checkHabit,
	isLoading,
}) {
	return (
		<Habit
			done={done}
			isLoading={isLoading}
			newRecord={
				currentSequence >= highestSequence && currentSequence > 0
					? true
					: false
			}>
			<div className="Infos">
				<h1>{name}</h1>
				<div className="steakInfos">
					<p>
						Sequência atual:
						<b className="child1"> {currentSequence} dias</b>
					</p>
					<p>
						Seu recorde:
						<b className="child2"> {highestSequence} dias</b>
					</p>
				</div>
			</div>
			<button onClick={() => checkHabit(id, done)}>
				<HabitCheckButton />
			</button>
		</Habit>
	)
}

const Habit = styled.div`
	width: 100%;
	height: 94px;
	display: flex;
	justify-content: space-between;
	padding: 13px;
	background-color: #fff;
	border-radius: 5px;
	font-family: "Lexend Deca";
	font-weight: 400;
	color: #666666;
	margin-bottom: 10px;
	button {
		width: 69px;
		height: 69px;
		background: ${props => (props.done ? "#8fc549" : "#E7E7E7")};
		border: 1px solid #e7e7e7;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		pointer-events: ${props => (props.isLoading ? "none" : "auto")};
		cursor: ${props => (props.isLoading ? "default" : "pointer")};
	}
	.Infos {
		width: auto;
		height: auto;
		display: flex;
		flex-direction: column;
		h1 {
			font-size: 19.976px;
			line-height: 25px;
			color: #666666;
		}
		.steakInfos {
			font-size: 12.976px;
			line-height: 16px;
			margin-top: 7px;
			.child1 {
				color: ${props => (props.done ? "#8fc549" : "#666666")};
			}
			.child2 {
				color: ${props => (props.newRecord ? "#8fc549" : "#666666")};
			}
		}
	}
`;