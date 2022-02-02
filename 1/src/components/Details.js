import useDetails from "../hooks/useDetails";
import React, { useRef } from "react";


const Details = ({id}) => {
	const [{data, error, loading}] = useDetails(id)

	if (loading) return <h1>Загрузка...</h1>

	return(
		<div className="card" style={{width: "18rem"}}>
			<img src={data.avatar} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{data.name}</h5>
			</div>
			<ul className="list-group list-group-flush">
				{Object.keys(data.details).map(item => (
					<li 
						className="list-group-item"
						key={item}
					>
						<span className="text-capitalize">{item}: </span>{data.details[item]}
					</li>
				))}
			</ul>
		</div>
	)
}


export default Details;