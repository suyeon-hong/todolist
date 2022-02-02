import styled from 'styled-components'

export const Button = styled.button`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: #38D9A9;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 50%;
	bottom: 0;
	margin-bottom: -40px;
	margin-left: -40px;
`
export const ActiveBtn = styled(Button)`
	background: tomato;
	transform: rotate(45deg)
`